import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
} from '@stencil/core'

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
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    @Listen('click')
    handleClick() {
        if (this.isClickable()) {
            const input = this.getInput()
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

    componentWillLoad() {
        this.onChange = this.onChange.bind(this)
    }

    private onChange(): void {
        this.checked = !this.checked
        this.ruxChange.emit(this.checked)
    }

    private isClickable(): boolean {
        return !this.disabled
    }

    private getInput(): HTMLInputElement {
        return this.el.shadowRoot?.querySelector('input') as HTMLInputElement
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
        } = this

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
                    id={checkboxId}
                    disabled={disabled}
                    required={required}
                    checked={checked}
                    value={value}
                    onChange={this.onChange}
                />
                <label htmlFor={name}>
                    <slot></slot>
                </label>
            </div>
        )
    }
}
