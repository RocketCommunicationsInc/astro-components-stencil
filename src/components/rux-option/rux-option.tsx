import {
    Prop,
    Element,
    Event,
    EventEmitter,
    Component,
    Host,
    h,
    Watch,
} from '@stencil/core'

/**
 * This component should be used exclusively with RuxSelect.
 * It's main function is to broadcast to RuxSelect when the value property changes.
 * RuxSelect can only listen for slot change, which won't fire in the scenario where there
 * might be 2 options and only their values change. Because the nodes themselves aren't added or removed,
 * onSlotchange doesn't fire.
 */
@Component({
    tag: 'rux-option',
    styleUrl: 'rux-option.css',
    shadow: true,
})
export class RuxOption {
    @Element() el!: HTMLRuxOptionElement

    /**
     * The option value
     */
    @Prop() value!: string

    /** @internal **/
    @Event({ eventName: 'rux-option-changed', composed: true })
    optionChanged!: EventEmitter<void>

    @Watch('value')
    handleValueChange() {
        this.optionChanged.emit()
        console.log('emit option change')
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    _handleSlotChange() {
        const text = this.el.innerText
        console.log('heard option slot change--', text)

        this.optionChanged.emit()
    }

    render() {
        return (
            <Host>
                <slot onSlotchange={this._handleSlotChange}></slot>
            </Host>
        )
    }
}
