import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-checkbox',
    styleUrl: 'rux-checkbox.scss',
    shadow: true,
})
export class RuxCheckbox {
    checkboxId = `rux-checkbox-${++id}`
    @Element() el!: HTMLRuxCheckboxElement

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The checkbox name
     */
    @Prop() name = ''
    /**
     * The checkbox name
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * The checkbox name
     */
    @Prop({ reflect: true, mutable: true }) checked = false

    /**
     * Toggles indeterminate state of a checkbox
     */
    @Prop({ reflect: true }) indeterminate = false

    /**
     * Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Sets the input as required
     */
    @Prop() required: boolean = false

    /**
     * Sets the input as invalid
     */
    @Prop() invalid: boolean = false

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    constructor() {}

    componentWillLoad() {
        this.onChange = this.onChange.bind(this)
    }

    private onChange(): void {
        this.checked = !this.checked
        this.ruxChange.emit(this.checked)
    }

    render() {
        const {
            checkboxId,
            indeterminate,
            disabled,
            required,
            checked,
            name,
            value,
            invalid,
            errorText,
            helpText,
        } = this

        return (
            <div class="rux-form-field">
                <div
                    class={{
                        'rux-checkbox': true,
                        'rux-checkbox--indeterminate': indeterminate,
                        'rux-checkbox--invalid': invalid,
                        'rux-checkbox--has-error': required,
                        'rux-checkbox--has-text':
                            errorText !== undefined || helpText !== undefined,
                    }}
                >
                    <input
                        type="checkbox"
                        name={name}
                        id={checkboxId}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        value={value}
                        onChange={this.onChange}
                    />
                    <label htmlFor={checkboxId}>
                        <slot></slot>
                    </label>
                </div>
                {this.helpText && !this.errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{errorText}</div>
                )}
            </div>
        )
    }
}
