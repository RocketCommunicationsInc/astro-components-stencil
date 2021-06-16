import { html, render } from 'lit-html'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { withActions } from '@storybook/addon-actions'

// import { RuxModal } from '../src/components/rux-modal/rux-modal.js'
import readme from '../components/rux-modal/readme.md'

export default {
    title: 'Components/Dialog Box',
    // decorators: [withKnobs],
    decorators: [withActions('modalClosed', { depth: 100 }), withKnobs],
}

export const DialogBox = () => {
    const toggleModal = boolean('Enable modal', true)
    const message = text('Modal message', 'Modal message')
    const title = text('Modal title', 'Modal title')
    const confirmText = text('Confirm button text', 'Release')
    const denyText = text('Deny button text', 'Cancel')
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-modal
                modal-message="${message}"
                modal-title="${title}"
                confirm-text="${confirmText}"
                deny-text="${denyText}"
                ?open="${toggleModal}"
            ></rux-modal>
        </div>
    `
}

DialogBox.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}
