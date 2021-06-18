import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: true,
})
export class RuxModal {
    /**
     * Shows and hides modal
     */
    @Prop({ reflect: true }) open: boolean = false
    /**
     * Modal body message
     */
    @Prop() modalMessage: string = ''
    /**
     * Modal header title
     */
    @Prop() modalTitle: string = ''
    /**
     * Text for confirmation button
     */
    @Prop() confirmText: string = 'Confirm'
    /**
     * Text for close button
     */
    @Prop() denyText: string = 'Cancel'
    /**
     * Event that is fired when modal closes
     */
    @Event({
        eventName: 'modalClosed',
        composed: true,
        bubbles: true,
    })
    modalCloseEvent: EventEmitter<boolean>

    constructor() {
        this._validateParams()
    }

    _handleModalChoice(e) {
        // convert string value to boolean
        const choice = e.currentTarget.dataset.value === 'true'
        this.modalCloseEvent.emit(choice)
        this.open = false
    }

    _validateParams() {
        let errorText = ''
        // in the event neither Confirm/Deny text is supplied provide
        // a default cancel button to get out of the modal
        if (!this.modalTitle || !this.modalMessage) {
            errorText += 'No '
        }

        if (!this.modalTitle) {
            errorText += 'modal title '
        }

        if (!this.modalMessage) {
            errorText +=
                (errorText === 'No ' ? 'modal text' : ' or modal text') + ' '
        }

        if (errorText.length) {
            console.error(errorText + 'have been passed to on the modal')
        }
    }

    render() {
        const {
            open,
            modalMessage,
            modalTitle,
            confirmText,
            denyText,
            _handleModalChoice,
        } = this

        return (
            <div class="rux-modal-container">
                <dialog class="rux-modal" role="dialog" open={open}>
                    <header class="rux-modal__titlebar">
                        <h1>{modalTitle}</h1>
                    </header>
                    <div class="rux-modal__content">
                        <div class="rux-modal__message">{modalMessage}</div>
                        <rux-button-group align="right">
                            <rux-button
                                outline={confirmText.length > 0}
                                onClick={_handleModalChoice.bind(this)}
                                data-value="false"
                                hidden={!denyText}
                                tabindex="-1"
                            >
                                {denyText}
                            </rux-button>
                            <rux-button
                                onClick={_handleModalChoice.bind(this)}
                                data-value="true"
                                hidden={!confirmText}
                                tabindex="0"
                            >
                                {confirmText}
                            </rux-button>
                        </rux-button-group>
                    </div>
                </dialog>
            </div>
        )
    }
}
