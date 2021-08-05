import { Prop, Component, Event, EventEmitter, Host, h } from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-input-field',
    styleUrl: 'rux-input-field.scss',
    shadow: true,
})
export class RuxInputField {
    inputId = `input-${++id}`

    /**
     * The input label text
     */
    @Prop() label?: string
    /**
     * The input placeholder text
     */
    @Prop() placeholder?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Marks the input as invalid
     */
    @Prop() invalid = false

    /**
     * The input value
     */
    @Prop({ mutable: true, reflect: true }) value: string = ''

    /**
     * The input name
     */
    @Prop() name = ''

    /**
     * The input type
     */
    @Prop() type:
        | 'text'
        | 'number'
        | 'email'
        | 'url'
        | 'search'
        | 'password'
        | 'tel' = 'text'

    /**
     * The input min attribute
     */
    @Prop() min?: string

    /**
     * The input max attribute
     */
    @Prop() max?: string

    /**
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Sets the input as disabled
     */
    @Prop() required: boolean = false

    /**
     * Styles the input element and label smaller for space-limited situations.
     */
    @Prop() small: boolean = false

    /**
     * The input step attribute
     */
    @Prop() step?: string

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    connectedCallback() {
        this.onChange = this.onChange.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxChange.emit()
    }

    onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxInput.emit()
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-form-field': true,
                        'rux-form-field--small': this.small,
                    }}
                >
                    <label class="rux-input-label" htmlFor={this.inputId}>
                        {this.label}
                        {this.required && (
                            <span class="rux-input-label__asterisk">*</span>
                        )}
                    </label>
                    <input
                        name={this.name}
                        disabled={this.disabled}
                        type={this.type}
                        aria-invalid={this.invalid ? 'true' : 'false'}
                        placeholder={this.placeholder}
                        required={this.required}
                        step={this.step}
                        min={this.min}
                        max={this.max}
                        value={this.value}
                        class={{
                            'rux-input': true,
                            'rux-input--disabled': this.disabled,
                            'rux-input--invalid': this.invalid,
                            'rux-input--search': this.type === 'search',
                        }}
                        id={this.inputId}
                        onChange={this.onChange}
                        onInput={this.onInput}
                    ></input>
                </div>

                {this.helpText && (
                    <div class="rux-help-text">{this.helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{this.errorText}</div>
                )}
            </Host>
        )
    }
}
