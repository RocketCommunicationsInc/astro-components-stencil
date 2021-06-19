import { html, render } from 'lit-html'
import RuxButtonGroupReadme from '../components/rux-button-group/readme.md'
import { extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil'

// import { RuxButton } from '../../dist/custom-elements'

const args = extractArgTypes('rux-button-group')

export default {
    title: 'Components/Buttons',
    component: 'rux-button-group',
    subcomponents: { 'rux-button': 'rux-button' },
    argTypes: args,
}

export const GroupedButtons = (args) => {
    return html`
        <style>
            .light-theme {
                --exampleContainerBackgroundColor: var(--primaryElementText);
                --exampleContainerBorderColor: var(--colorQuaternaryLighten1);
            }
            .dark-theme {
                --exampleContainerBackgroundColor: var(--colorTertiaryDarken1);
                --exampleContainerBorderColor: var(--colorTertiary);
            }
            .example-container {
                min-width: 20rem;
                background: var(--exampleContainerBackgroundColor);
                border: 1px solid var(--exampleContainerBorderColor);
                padding: 0.625rem;
                display: block;
            }
        </style>
        <div style="padding: 10%; display: flex; justify-content: center;">
            <div class="example-container">
                <rux-button-group .align="${args.align ? args.align : 'right'}">
                    <rux-button outline>Cancel</rux-button>
                    <rux-button>Continue</rux-button>
                </rux-button-group>
            </div>
        </div>
    `
}

GroupedButtons.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonGroupReadme,
    },
}
