import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core'

let id = 0

/**
 * @slot (default) - The radio label
 */

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
     * The radio name
     */
    @Prop() name = ''
    /**
     * The radio value
     */
    @Prop() value: string = ''

    /**
     * Toggles checked state of a radio
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * The radio label text. For HTML content, use the default slot instead.
     */
    @Prop() label?: string

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxBlur' }) ruxBlur!: EventEmitter

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this.radioGroup = this.el.closest('rux-radio-group')
        this.syncFromGroup = this.syncFromGroup.bind(this)
        if (this.radioGroup) {
            this.syncFromGroup()
            this.radioGroup.addEventListener('ruxChange', this.syncFromGroup)
        }
    }

    disconnectedCallback() {
        if (this.radioGroup) {
            this.radioGroup.removeEventListener('ruxChange', this.syncFromGroup)
        }
    }

    /**
     * Sets checked property when the parent Radio Group value changes.
     */
    syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value
        }
    }

    private _onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    render() {
        const {
            label,
            radioId,
            checked,
            disabled,
            name,
            value,
            _onChange,
            _onBlur,
        } = this

        return (
            <div class="rux-form-field">
                <div class="rux-radio">
                    <input
                        type="radio"
                        name={name}
                        id={radioId}
                        disabled={disabled}
                        checked={checked}
                        value={value}
                        onChange={_onChange}
                        onBlur={() => _onBlur()}
                    />
                    <label htmlFor={radioId}>
                        <slot>{label}</slot>
                    </label>
                </div>
            </div>
        )
    }
}
