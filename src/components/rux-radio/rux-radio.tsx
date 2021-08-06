import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Watch,
} from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-radio',
    styleUrl: 'rux-radio.scss',
    shadow: true,
})
export class RuxRadio {
    radioId = `rux-radio-${++id}`
    private radioGroup: HTMLRuxRadioGroupElement | null = null

    @Element() el!: HTMLRuxRadioElement

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The radio name
     */
    @Prop() name = ''
    /**
     * The radio value
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * Toggles checked state of a radio
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the radio as required
     */
    @Prop() required: boolean = false

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    @Watch('checked')
    handleWatch() {
        if (this.checked) {
            // this.getSiblingRadios().map((radio) => (radio.checked = false))
        }
        // this.ruxChange.emit()
    }

    connectedCallback() {
        this.handleClick = this.handleClick.bind(this)
        this.radioGroup = this.el.closest('rux-radio-group')
        this.syncFromGroup = this.syncFromGroup.bind(this)
        if (this.radioGroup) {
            this.syncFromGroup()
            this.radioGroup.addEventListener('rux-change', this.syncFromGroup)
        }
    }

    handleClick(ev: MouseEvent) {
        const target = ev.target as HTMLInputElement
        console.log(target)

        // this.checked = target.checked
    }

    getSiblingRadios() {
        if (!this.radioGroup) {
            return []
        }
        const radios = this.radioGroup.querySelectorAll('rux-radio')
        return Array.from(radios).filter(
            (radio) => radio !== this.el
        ) as HTMLRuxRadioElement[]
    }

    syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value
        }
    }

    render() {
        const {
            radioId,
            checked,
            disabled,
            errorText,
            helpText,
            name,
            required,
            value,
        } = this

        return (
            <div class="rux-form-field">
                <div
                    class={{
                        'rux-radio': true,
                        'rux-radio--has-error': required,
                        'rux-radio--has-text':
                            errorText !== undefined || helpText !== undefined,
                    }}
                >
                    <input
                        type="radio"
                        name={name}
                        id={radioId}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        value={value}
                        onClick={this.handleClick}
                    />
                    <label htmlFor={radioId}>
                        <slot></slot>
                    </label>
                </div>
                {helpText && !errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {errorText && <div class="rux-error-text">{errorText}</div>}
            </div>
        )
    }
}
