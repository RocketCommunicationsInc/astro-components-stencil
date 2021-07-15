import { Prop, Component, Host, h } from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-input',
    styleUrl: 'rux-input.scss',
    shadow: true,
})
export class RuxInput {
    inputId = `input-${++id}`

    @Prop() label?: string
    @Prop() placeholder?: string
    @Prop() helpText?: string
    @Prop() errorText?: string
    @Prop() invalid = false
    @Prop({ mutable: true, reflect: true }) value: string | number = ''
    @Prop() name = ''

    @Prop() type = 'text'
    @Prop() min?: string
    @Prop() max?: string

    /**
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled = false

    @Prop() required: boolean = false

    render() {
        return (
            <Host>
                <div class="rux-form-field">
                    <label htmlFor={this.inputId}>{this.label}</label>
                    <input
                        name={this.name}
                        disabled={this.disabled}
                        type={this.type}
                        aria-invalid={this.invalid ? 'true' : 'false'}
                        placeholder={this.placeholder}
                        required={this.required}
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
