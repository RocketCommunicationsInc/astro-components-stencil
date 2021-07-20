import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
} from '@stencil/core'

@Component({
    tag: 'rux-checkbox',
    styleUrl: 'rux-checkbox.scss',
    shadow: true,
})
export class RuxCheckbox {
    // inputId = `input-${++id}`
    checkboxElement!: HTMLElement
    @Element() el!: HTMLRuxCheckboxElement

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The checkbox value
     */
    @Prop({ mutable: true, reflect: true }) value: boolean = false

    /**
     * The checkbox name
     */
    @Prop() name = ''

    /**
     * The checkbox name
     */
    @Prop({ reflect: true }) checked = false

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
    @Event({ eventName: 'rux-checkbox' }) ruxCheckbox!: EventEmitter

    @Listen('click')
    handleClick() {
        if (this.isClickable()) {
            const input = this.el.shadowRoot?.querySelector(
                'input'
            ) as HTMLElement
            input.click()
        }
    }

    constructor() {
        /*
          There can't be duplicate names in order for name <=> for relationship to work
          due to outlined reasons those fields need to be scraped from host element once
          checkbox is initialized
        */
        this.el.removeAttribute('name')
    }

    connectedCallback() {
        this.onChange = this.onChange.bind(this)
        this.onCheck = this.onCheck.bind(this)
    }

    onChange() {
        if (this.checkboxElement) {
            const emitedValue = this.value ? this.value : this.checked
            this.ruxChange.emit(emitedValue)
        }
    }

    onCheck() {
        if (this.checkboxElement) {
            const emitedValue = this.value ? this.value : this.checked
            this.ruxCheckbox.emit(emitedValue)
        }
    }

    private isClickable(): boolean {
        return !this.disabled
    }

    render() {
        const { indeterminate, disabled, required, checked, name } = this

        return (
            <div
                class={{
                    'rux-checkbox': true,
                    'rux-checkbox--indeterminate': indeterminate,
                }}
            >
                <input
                    type="checkbox"
                    name={name}
                    disabled={disabled}
                    required={required}
                    checked={checked}
                />
                <label htmlFor={name}>
                    <slot></slot>
                </label>
            </div>
        )
    }
}
