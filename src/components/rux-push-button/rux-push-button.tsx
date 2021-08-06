import {
    Prop,
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Watch,
    Element,
} from '@stencil/core'
import { PushButtonChangeEvent } from './rux-push-button.model'
import { renderHiddenInput } from '../../utils/utils'

@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    private pushButtonId = `rux-push-button-${id++}`
    /**
     * Disables the push button via HTML `disabled` attribute.
     * Button takes on a distinct disabled visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false
    /**
     * Checks the push button via HTML `checked` attribute.
     * Push button takes on a distinct "enabled" or "selected" visual state.
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false
    /**
     * The label of the push button.
     * Can be overridden by placing content in the default slot of the rusx-push-button component.
     */
    @Prop() label: string = 'Push Button'
    @Prop() name: string = ''
    @Prop({ reflect: true, mutable: true }) value: string = ''
    /**
     * Emitted when the checked property has changed.
     */
    @Event({ eventName: 'rux-change' })
    ruxChange!: EventEmitter<PushButtonChangeEvent>

    // @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    // handleClick(event: MouseEvent) {
    //     event.preventDefault()
    //     this.checked = !this.checked
    //     const target = event.target as HTMLInputElement
    //     console.log('Target Value: ', target.value)
    //     this.value = target.value
    // }
    componentWillLoad() {
        this.onInput = this.onInput.bind(this)
        // this.onChange = this.onChange.bind(this)
    }

    @Watch('checked')
    checkedChanged(checked: boolean) {
        this.ruxChange.emit({ checked })
    }
    @Element() el!: HTMLRuxPushButtonElement

    private onInput(e: Event) {
        const target = e.target as HTMLInputElement
        console.log(target, 'target onInput')
        this.value = target.value
        this.checked = target.checked
        // console.log(
        //     'TargetValue: ',
        //     target.value,
        //     'TargetChecked: ',
        //     target.checked
        // )
        // this.checked = target.checked
        this.ruxInput.emit()
    }
    // private onChange(e: Event): void {
    //     const target = e.target as HTMLInputElement
    //     console.log(target, 'target onChange')
    //     this.checked = target.checked
    //     this.ruxChange.emit(this.checked)
    // }
    render() {
        const { disabled, checked, label, onInput } = this
        if (checked) {
            renderHiddenInput(
                true,
                this.el,
                this.name,
                this.value ? this.value : 'on',
                this.disabled
            )
        } else {
            let hiddenInput = document.querySelector('.aux-input')
            if (hiddenInput) hiddenInput.remove()
        }

        return (
            <Host
                aria-checked={`${checked}`}
                aria-hidden={disabled ? 'true' : null}
                role="switch"
            >
                <input
                    class="rux-push-button__input"
                    id={this.pushButtonId}
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    // onClick={(e) => this.handleClick(e)}
                    onInput={onInput}
                    // onChange={this.onChange}
                    value={this.value}
                />
                <label
                    class="rux-push-button__button"
                    htmlFor={this.pushButtonId}
                >
                    {label}
                </label>
                <slot></slot>
            </Host>
        )
    }
}

let id = 0
