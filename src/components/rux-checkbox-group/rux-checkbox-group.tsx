import { Prop, Component, Host, h, State, Element } from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The checkbox elements
 * @slot label - The checkbox group label
 * @part container - The container div of checkbox elements
 */
@Component({
    tag: 'rux-checkbox-group',
    styleUrl: 'rux-checkbox-group.scss',
    shadow: true,
})
export class RuxCheckboxGroup {
    @Element() el!: HTMLRuxCheckboxGroupElement

    @State() hasLabelSlot = false

    /**
     * The label of the checkbox group. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Presentational only. Renders the Checkbox Group as invalid.
     */
    @Prop() invalid: boolean = false

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }
    componentWillLoad() {
        this._handleSlotChange()
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-label': true,
                        hidden: !this.hasLabel,
                    }}
                >
                    <slot onSlotchange={this._handleSlotChange} name="label">
                        {this.label}
                    </slot>
                </div>
                <div
                    class={{
                        'rux-checkbox-group': true,
                        'rux-checkbox-group--invalid': this.invalid,
                    }}
                    part="container"
                >
                    <slot></slot>
                </div>
                {this.helpText && !this.errorText && (
                    <div class="rux-help-text">{this.helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{this.errorText}</div>
                )}
            </Host>
        )
    }
}
