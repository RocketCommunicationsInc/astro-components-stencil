import {
    Prop,
    Element,
    Event,
    EventEmitter,
    Component,
    Host,
    h,
} from '@stencil/core'

@Component({
    tag: 'rux-option-group',
    styleUrl: 'rux-option-group.css',
    shadow: true,
})
export class RuxOptionGroup {
    @Element() el!: HTMLRuxOptionGroupElement

    /**
     * The option group label
     */
    @Prop() label?: string

    @Event({ eventName: 'group-changed' })
    groupChanged!: EventEmitter<void>

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    _handleSlotChange() {
        this.groupChanged.emit()
        console.log('option group slot changed')
    }

    render() {
        return (
            <Host>
                <slot onSlotchange={this._handleSlotChange}></slot>
            </Host>
        )
    }
}
