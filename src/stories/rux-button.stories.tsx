import { html, render } from 'lit-html'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import RuxButtonReadme from '../components/rux-button/readme.md'
import { extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil'

const sizeOptions = {
    Small: 'small',
    Standard: '',
    Large: 'large',
}

const args = extractArgTypes('rux-button')

export default {
    title: 'Components/Buttons',
    component: 'rux-button',
    argTypes: args,
}

export const StandardButton = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?outline="${args.outline}"
                .size="${args.size}"
                .icon="${args.withIcon ? 'settings' : null}"
                >Button</rux-button
            >
        </div>
    `
}

StandardButton.parameters = {
    docs: {
        source: {
            code: '<rux-button>Button</rux-button>',
        },
    },
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonReadme,
    },
}

export const slottedIconButton = (args) => {
    const { size, disabled, outline, iconOnly } = args

    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${disabled}"
                ?outline="${outline}"
                ?icon-only="${iconOnly}"
                .size="${size}"
            >
                <rux-icon
                    icon="palette"
                    color="${outline ? 'primary' : 'dark'}"
                ></rux-icon>
                Slotted icon button
            </rux-button>
        </div>
    `
}

slottedIconButton.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: RuxButtonReadme,
        },
    },
}

export const AllButtonVariants = () => html`
    <style>
        .button-list {
            list-style-type: none;
            margin: 0 1rem 0 0;
            padding: 0;
            display: flex;
            flex-flow: column;
        }
        .button-list li {
            margin: 0 1rem 1rem 0;
            display: flex;
        }
        .button-list li rux-button:not(:last-child) {
            margin-right: 1rem;
        }
    </style>
    <div
        style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
    >
        <ul class="button-list">
            <li>
                <rux-button size="small" icon-only icon="settings"
                    >Small icon-only button</rux-button
                >
                <rux-button size="small">Small button</rux-button>
            </li>
            <li>
                <rux-button size="small" icon="settings"
                    >Small button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="small" icon-only disabled icon="settings"
                    >Small disabled icon-only button</rux-button
                >
                <rux-button size="small" disabled
                    >Small disabled button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" disabled icon="settings"
                    >Small disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="small" icon-only outline icon="settings"
                    >Small outline icon-only button</rux-button
                >
                <rux-button size="small" outline
                    >Small outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" outline icon="settings"
                    >Small outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="small"
                    icon-only
                    disabled
                    outline
                    icon="settings"
                    >Small disabled outline icon-only button</rux-button
                >
                <rux-button size="small" outline disabled
                    >Small disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" outline disabled icon="settings"
                    >Small disabled outline button with icon</rux-button
                >
            </li>
        </ul>
        <ul class="button-list">
            <li>
                <rux-button icon-only icon="settings"
                    >Standard icon-only button</rux-button
                >
                <rux-button>Standard button</rux-button>
            </li>
            <li>
                <rux-button icon="settings"
                    >Standard button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only disabled icon="settings"
                    >Standard disabled icon-only button</rux-button
                >
                <rux-button disabled>Standard disabled button</rux-button>
            </li>
            <li>
                <rux-button disabled icon="settings"
                    >Standard disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only outline icon="settings"
                    >Standard outline icon-only button</rux-button
                >
                <rux-button outline>Standard outline button</rux-button>
            </li>
            <li>
                <rux-button outline icon="settings"
                    >Standard outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only disabled outline icon="settings"
                    >Standard disabled outline icon-only button</rux-button
                >
                <rux-button outline disabled
                    >Standard disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button outline disabled icon="settings"
                    >Standard disabled outline button with icon</rux-button
                >
            </li>
        </ul>
        <ul class="button-list">
            <li>
                <rux-button size="large" icon-only icon="settings"
                    >Large icon-only button</rux-button
                >
                <rux-button size="large">Large button</rux-button>
            </li>
            <li>
                <rux-button size="large" icon="settings"
                    >Large button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="large" icon-only disabled icon="settings"
                    >Large disabled icon-only button</rux-button
                >
                <rux-button size="large" disabled
                    >Large disabled button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" disabled icon="settings"
                    >Large disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="large" icon-only outline icon="settings"
                    >Large outline icon-only button</rux-button
                >
                <rux-button size="large" outline
                    >Large outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" outline icon="settings"
                    >Large outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="large"
                    icon-only
                    disabled
                    outline
                    icon="settings"
                    >Large disabled outline icon-only button</rux-button
                >
                <rux-button size="large" outline disabled
                    >Large disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" outline disabled icon="settings"
                    >Large disabled outline button with icon</rux-button
                >
            </li>
        </ul>
        <!-- <ul class="button-list">
    <li>
      <input class="rux-button" type="submit" value="input type=submit">
    </li>
    <li>
      <input class="rux-button" type="button" value="input type=button">
    </li>
    <li>
      <input class="rux-button" type="reset" value="input type=reset">
    </li>
    <li>
      <input class="rux-button" type="submit" value="input disabled" disabled>
    </li>
  </ul> -->
    </div>
`

AllButtonVariants.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonReadme,
    },
}
