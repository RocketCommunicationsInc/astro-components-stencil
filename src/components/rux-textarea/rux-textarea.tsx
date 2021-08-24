import {
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Prop,
    Element,
} from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

let id = 0

@Component({
    tag: 'rux-textarea',
    styleUrl: 'rux-textarea.scss',
    shadow: true,
})
export class RuxTextarea {
    inputId = `rux-textarea-${++id}`

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
     * The input minLength attribute
     */
    @Prop({ attribute: 'min-length' }) minLength?: string

    /**
     * The input maxLength attribute
     */
    @Prop({ attribute: 'max-length' }) maxLength?: string

    /**
     * The input rows attribute
     */
    @Prop() rows?: number

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
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'rux-blur' }) ruxBlur!: EventEmitter

    @Element() el!: HTMLRuxTextareaElement

    @Element() el!: HTMLRuxTextareaElement

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._onInput = this._onInput.bind(this)
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxChange.emit()
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxInput.emit()
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    render() {
        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <div
                    class={{
                        'rux-textarea-field': true,
                        'rux-textarea-field--small': this.small,
                    }}
                >
                    <label class="rux-textarea-label" htmlFor={this.inputId}>
                        {this.label}
                    </label>
                    <textarea
                        name={this.name}
                        disabled={this.disabled}
                        aria-invalid={this.invalid ? 'true' : 'false'}
                        placeholder={this.placeholder}
                        required={this.required}
                        minlength={this.minLength}
                        maxlength={this.maxLength}
                        value={this.value}
                        class={{
                            'rux-textarea': true,
                            'rux-textarea--disabled': this.disabled,
                            'rux-textarea--invalid': this.invalid,
                        }}
                        id={this.inputId}
                        rows={this.rows}
                        onChange={this._onChange}
                        onInput={this._onInput}
                        onBlur={() => this._onBlur()}
                    ></textarea>
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
