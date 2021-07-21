import { withActions } from '@storybook/addon-actions'
import { html, render } from 'lit-html'
import RuxCheckboxReadme from '../components/rux-checkbox/readme.md'

export default {
    title: 'Components/Form Elements',
    decorators: [withActions('rux-change', 'rux-checkbox')],
}

export const Checkboxes = () => {
    return html`
        <style>
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
                        name="disabledOne"
                        checked
                        disabled
                    >
                        Disabled
                    </rux-checkbox>
                </li>

                <li>
                    <rux-checkbox
                        name="checkboxGroup"
                        id="checkbox4c"
                        indeterminate
                        checked
                    >
                        Indeterminate
                    </rux-checkbox>
                </li>
            </ul>
        </section>
    `
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
