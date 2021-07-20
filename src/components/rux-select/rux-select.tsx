import { Component, Host, h, Prop, Element } from '@stencil/core'

@Component({
    tag: 'rux-select',
    styleUrl: 'rux-select.scss',
    scoped: true,
})
export class RuxSelect {
    @Element() el!: HTMLRuxSelectElement

    /**
     * Disables the item
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the field as required
     */
    @Prop({ reflect: true }) required: boolean = false

    /**
     * Sets the Label for the Select
     */
    @Prop() label?: string

    /**
     * Id for the Select Input
     */
    @Prop({ attribute: 'input-id' }) inputId?: string

    /**
     * Id for the Label
     */
    @Prop({ attribute: 'label-id' }) labelId?: string

    render() {
        const { disabled, required, label, inputId, labelId } = this
        return (
            <Host>
                {label && <label id={labelId}>{label}</label>}
                <select
                    class="rux-select"
                    id={inputId}
                    aria-labelledby={labelId}
                    disabled={disabled}
                    required={required}
                >
                    <slot></slot>
                </select>
            </Host>
        )
    }
}
