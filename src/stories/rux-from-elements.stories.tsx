import { withActions } from '@storybook/addon-actions'
import { html, render } from 'lit-html'
import RuxCheckboxReadme from '../components/rux-checkbox/readme.md'
import radioButtonsReadme from '../components/rux-radio/readme.md'

export default {
    title: 'Components/Form Elements',
    decorators: [withActions('rux-change', 'rux-checkbox')],
}

export const Checkboxes = () => {
    return html` <style>
            section {
                display: flex;
                justify-content: center;
                padding: 10vh 5vw 0;
            }
            section ul {
                margin-right: 1rem;
                margin-bottom: 0;
                list-style: none;
            }
        </style>
        <section>
            <ul>
                <li>
                    <rux-checkbox id="checked" name="checkedOne" checked>
                        Checked
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox id="unchecked" name="uncheckedOne">
                        Unchecked
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox
                        id="disabled"
                        name="disabled"
                        checked
                        disabled
                    >
                        Disabled
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox
                        name="indeterminate"
                        id="checkbox4c"
                        checked
                        indeterminate
                    >
                        Indeterminate
                    </rux-checkbox>
                </li>
                <!-- <li>
                    <rux-checkbox
                        name="checkboxGroup"
                        id="checkbox4c"
                        checked
                        help-text="This is an example help text"
                    >
                        With Help Text
                    </rux-checkbox>
                </li>
                <li>
                    <rux-checkbox
                        name="checkboxGroup"
                        id="checkbox4c"
                        checked
                        required
                        error-text="This is an example error text"
                    >
                        With Error Text
                    </rux-checkbox>
                </li> -->
            </ul>
        </section>`
}

Checkboxes.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxCheckboxReadme,
    },
}

export const RadioButtons = () => html`
    <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
        <ul style="list-style:none;">
            <li>
                <rux-radio name="radio1c" value="one" checked
                    >Radio button</rux-radio
                >
            </li>
            <li>
                <rux-radio name="radio1c" value="two"
                    >Radio button checked</rux-radio
                >
            </li>
            <li>
                <rux-radio name="radio2c" value="three" checked disabled
                    >Radio button disabled</rux-radio
                >
            </li>
            <li>
                <rux-radio name="radio2c" value="four" checked disabled
                    >Radio button disabled checked</rux-radio
                >
            </li>
        </ul>
    </div>
`

RadioButtons.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: radioButtonsReadme,
        },
    },
}
