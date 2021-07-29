import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'

@Component({
    tag: 'rux-slider',
    styleUrl: 'rux-slider.scss',
    shadow: true,
})
export class RuxSlider {
    /**
     * Min value of the slider.
     */
    @Prop() min?: number = 0
    /**
     * Max value of slider.
     */
    @Prop() max?: number = 100
    /**
     *
     * Step amount of slider value.
     */
    @Prop() step?: number = 1
    /**
     * Current value of the slider.
     */
    @Prop({ mutable: true }) val?: number = 50
    /**
     *
     * Determines the if the slider is disabled.
     */
    @Prop({ reflect: true }) disabled?: boolean = false
    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    componentWillLoad() {
        this._updateValue()
        this._getBrowser(navigator.userAgent.toLowerCase())
    }

    connectedCallback() {
        this.onInput = this.onInput.bind(this)
    }
    @Element() el!: HTMLInputElement

    @Watch('val')
    @Watch('min')
    @Watch('max')
    handleChange() {
        this._updateValue()
    }

    _updateValue() {
        //If val is not a number, change it to 0.
        if (!this.val && this.val != 0) {
            this.val = 0
        }
        //If min is not a number, change it to 0
        if (!this.min && this.min != 0) {
            this.min = 0
        }
        //Min can't be > max
        if (this.min > this.max!) {
            if (this.step && this.step != 0) {
                this.min = this.max! - this.step!
            } else {
                this.min = this.max! - 5
            }
        }
        //If max is not a number, change it to 100
        if (!this.max && this.max != 0) {
            this.max = 100
        }
        // If min is given and is greater than value, then set value to the min.
        if (this.val && this.val < this.min) {
            this.val = this.min
        }
        //If max is given and is less than value, set value to max
        if (this.max && this.max < this.val) {
            this.val = this.max
        }
        this._setValuePercent()
    }
    //Sets the --valuePercent CSS var
    _setValuePercent() {
        const dif = ((this.val! - this.min!) / (this.max! - this.min!)) * 100
        this.el.style.setProperty('--valuePercent', `${dif}%`)
    }
    onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.val = parseInt(target.value)
        this._setValuePercent()
        this.ruxInput.emit()
    }
    //Safari needs 0px top for the thumb to look normal.
    _getBrowser(ua: string) {
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
            this.el.style.setProperty('--top', '0px')
        }
    }

    render() {
        const { min, max, val, step, disabled, onInput } = this
        return (
            <Host>
                <div class="rux-slider">
                    <input
                        onInput={onInput}
                        type="range"
                        class="rux-range"
                        min={min}
                        max={max}
                        value={val}
                        step={step}
                        disabled={disabled}
                        aria-label="slider"
                        aria-disabled={disabled ? 'true' : 'false'}
                    ></input>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
