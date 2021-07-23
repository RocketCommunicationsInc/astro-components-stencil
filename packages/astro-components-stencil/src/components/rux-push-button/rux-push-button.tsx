import {
    Prop,
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'
import { PushButtonChangeEvent } from './rux-push-button.model'

@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    @Prop() disabled: boolean = false
    @Prop({ reflect: true, mutable: true }) checked: boolean = false
    @Prop() label: string = ''

    /**
     * Emitted when the checked property has changed.
     */
    @Event({ eventName: 'rux-change' })
    ruxChange!: EventEmitter<PushButtonChangeEvent>

    handleClick(event: MouseEvent) {
        event.preventDefault()
        this.checked = !this.checked
        console.log(this.checked)
    }

    @Watch('checked')
    checkedChanged(checked: boolean) {
        this.ruxChange.emit({
            checked: checked,
        })
    }

    render() {
        const { disabled, checked, label } = this
        return (
            <Host
                onClick={this.handleClick}
                aria-checked={`${checked}`}
                aria-hidden={disabled ? 'true' : null}
                role="switch"
            >
                <input
                    class="rux-push-button__input"
                    id="ruxSwitch"
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                />
                <label class="rux-push-button__button" htmlFor="ruxSwitch">
                    <slot>{label}</slot>
                </label>
            </Host>
        )
    }
}
