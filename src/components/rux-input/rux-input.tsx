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

    render() {
        return (
            <Host>
                <div class="rux-form-field">
                    <label htmlFor={this.inputId}>{this.label}</label>
                    <input
                        placeholder={this.placeholder}
                        class="rux-input"
                        id={this.inputId}
                        type="text"
                    ></input>
                </div>

                <div class="rux-help-text">{this.helpText}</div>

                {this.errorText && (
                    <div class="rux-error-text">{this.errorText}</div>
                )}
            </Host>
        )
    }
}
