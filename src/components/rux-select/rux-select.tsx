import {
    Component,
    Element,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Watch,
    State,
} from '@stencil/core'
import FormFieldMessage from '../../common/functional-components/FormFieldMessage/FormFieldMessage'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

/**
 * @slot (default) - The select options
 * @slot label - The select label
 */
@Component({
    tag: 'rux-select',
    styleUrl: 'rux-select.scss',
    shadow: true,
})
export class RuxSelect implements FormFieldInterface {
    @Element() el!: HTMLRuxSelectElement
    @State() hasLabelSlot = false
    selectEl!: HTMLSelectElement

    /**
     * Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the field as required
     */
    @Prop({ reflect: true }) required: boolean = false

    /**
     * The select label text. For HTML content, use the `label` slot instead.
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
     * Presentational only. Renders the Select Menu as invalid.
     */
    @Prop({ reflect: true }) invalid: boolean = false

    /**
     * Sets the Name of the Input Element
     */
    @Prop({ reflect: true }) name = ''

    /**
     * The value of the selected option
     */
    @Prop({ mutable: true, reflect: true }) value?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Event Emitted when the Value of the Select is Changed
     */
    @Event({ eventName: 'rux-change' })
    ruxSelectChanged!: EventEmitter<void>

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'rux-blur' }) ruxBlur!: EventEmitter

    @Watch('value')
    onValueChange() {
        this._syncOptionsFromValue()
    }

    @Watch('label')
    handleLabelChange() {
        this._handleLabelSlotChange()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleLabelSlotChange = this._handleLabelSlotChange.bind(this)
    }

    componentWillLoad() {
        this._handleLabelSlotChange()
        if (this.value) {
            this._handleSlotChange()
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _handleLabelSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    private _handleSlotChange() {
        this._syncOptionsWithNativeSelect()
        this._syncOptionsFromValue()
    }

    /**
     * Copies the slotted content into the shadow-DOMed select element
     */
    private _syncOptionsWithNativeSelect() {
        const options = [...Array.from(this.el.querySelectorAll('option'))]
        const optionGroups = [
            ...Array.from(this.el.querySelectorAll('optgroup')),
        ]

        if (optionGroups.length > 0) {
            optionGroups.map((optgroup) => {
                const groupEl = Object.assign(
                    document.createElement('optgroup'),
                    {
                        label: optgroup.label,
                    }
                )

                Array.from(optgroup.children).map((option) => {
                    const opt = option as HTMLOptionElement
                    const item = Object.assign(
                        document.createElement('option'),
                        {
                            innerHTML: opt.innerHTML,
                            value: opt.value,
                        }
                    )

                    groupEl.appendChild(item)
                })

                this.selectEl.appendChild(groupEl)
            })
        } else {
            if (options.length > 0) {
                if (this.selectEl) {
                    this.selectEl.innerHTML = ''
                    options.map((option) => {
                        const item = Object.assign(
                            document.createElement('option'),
                            {
                                innerHTML: option.innerHTML,
                                value: option.value,
                            }
                        )
                        this.selectEl.appendChild(item)
                    })
                }
            }
        }
    }

    private _syncOptionsFromValue() {
        if (this.selectEl) {
            const options = [
                ...Array.from(this.selectEl.querySelectorAll('option')),
            ]
            options.map((option: HTMLOptionElement) => {
                option.selected = option.value === this.value
            })
        }
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLOptionElement
        this.value = target.value
        this.ruxSelectChanged.emit()
    }

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

        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <label
                    id={labelId}
                    htmlFor={inputId}
                    aria-hidden={this.hasLabel ? 'false' : 'true'}
                >
                    <span class={{ hidden: !this.hasLabel }}>
                        <slot
                            onSlotchange={this._handleLabelSlotChange}
                            name="label"
                        >
                            {label}
                        </slot>
                    </span>
                </label>
                <select
                    class={
                        'rux-select ' + (invalid ? 'rux-select-invalid' : '')
                    }
                    ref={(el) => (this.selectEl = el as HTMLSelectElement)}
                    id={inputId}
                    disabled={disabled}
                    required={required}
                    name={name}
                    onChange={(e) => this._onChange(e)}
                    onBlur={() => this._onBlur()}
                ></select>
                <div aria-hidden="true" class="hidden">
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
                <FormFieldMessage
                    errorText={this.errorText}
                    helpText={this.helpText}
                ></FormFieldMessage>
            </Host>
        )
    }
}
