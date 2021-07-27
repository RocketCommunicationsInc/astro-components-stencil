import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'rux-select',
    styleUrl: 'rux-select.scss',
    scoped: true,
})
export class RuxSelect {
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
    @Prop({ attribute: 'input-id' })
    inputId?: string = `rux-select-${selectIds++}`

    /**
     * Id for the Label
     */
    @Prop({ attribute: 'label-id' }) labelId?: string

    /**
     * Sets the Select as Invalid for Custom Validation Usage
     */
    @Prop({ reflect: true }) invalid: boolean = false

    /**
     * Sets the Name of the Input Element
     */
    @Prop({ reflect: true }) name?: string

    @Event({ eventName: 'rux-select-changed' })
    ruxSelectChanged!: EventEmitter<void>

    render() {
        const {
            disabled,
            required,
            label,
            inputId,
            labelId,
            invalid,
            name,
        } = this

        return (
            <Host>
                {label && (
                    <label id={labelId} htmlFor={inputId}>
                        {label}
                    </label>
                )}
                <select
                    class={
                        'rux-select ' + (invalid ? 'rux-select-invalid' : '')
                    }
                    id={inputId}
                    disabled={disabled}
                    required={required}
                    name={name}
                    onChange={() => this.ruxSelectChanged.emit()}
                >
                    <slot></slot>
                </select>
            </Host>
        )
    }
}

let selectIds = 0
