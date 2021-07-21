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

    /**
     * Sets the Select as Invalid for Custom Validation Usage
     */
    @Prop({ reflect: true }) invalid: boolean = false

    render() {
        const { disabled, required, label, inputId, labelId, invalid } = this
        return (
            <Host>
                {label && <label id={labelId}>{label}</label>}
                <select
                    class={
                        'rux-select ' + (invalid ? 'rux-select-invalid' : '')
                    }
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
