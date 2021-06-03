import {
    Component,
    Event,
    Watch,
    EventEmitter,
    Prop,
    Host,
    h,
} from '@stencil/core'

@Component({
    tag: 'rux-switch',
    styleUrl: 'rux-switch.css',
    shadow: true,
})
export class RuxSwitch {
    private inputId = `rux-switch-${id++}`
    @Prop() name: string
    @Prop() disabled: boolean = false
    @Prop({ mutable: true }) checked: boolean = false

    /**
     * Emitted when the value property has changed.
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    @Watch('checked')
    checkedChanged(checked: boolean) {
        this.ruxChange.emit({
            checked: checked,
        })
    }

    handleClick(e) {
        e.preventDefault()
        this.checked = !this.checked
    }

    render() {
        const { inputId, name, disabled, checked } = this
        return (
            <Host onClick={this.handleClick}>
                <div class="rux-switch">
                    <input
                        id={inputId}
                        class="rux-switch__input"
                        type="checkbox"
                        name={name}
                        disabled={disabled}
                        checked={checked}
                    />
                    <label class="rux-switch__button" htmlFor={inputId}></label>
                </div>
            </Host>
        )
    }
}

let id = 0
