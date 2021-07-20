import { html, render } from 'lit-html'

export default {
    title: 'Components/Form Elements',
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
                        checked
                        indeterminate
                    >
                        Indeterminate
                    </rux-checkbox>
                </li>
            </ul>
        </section>
    `
}

Checkboxes.story = {
    parameters: {
        exports: {
            render,
            html,
        },
    },
}
