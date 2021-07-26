import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
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
        this._getValueOnLoad()
    }

    connectedCallback() {
        this.onInput = this.onInput.bind(this)
    }
    @Element() el!: HTMLInputElement
    _getValueOnLoad() {
        //If val is not a number, change it to 0.

        if (!this.val && this.val != 0) {
            console.log('changing val')
            this.val = 0
        }
        //If min is not a number, change it to 0
        if (!this.min && this.min != 0) {
            this.min = 0
        }
        //If max is not a number, change it to 100
        if (!this.max && this.max != 0) {
            this.max = 100
        }
        // If min is given and is greater than value, then set value to the min.
        if (this.val && this.val < this.min!) {
            this.val = this.min
        }
        this.el.style.setProperty('--value', this.val!.toString())
        this._setValuePercent()
        console.log(this.val, 'val')
        console.log(this.min, 'min')
        console.log(this.max, 'max')
        console.log(this.step, 'step')
        console.log(this.disabled, 'disabled')
    }
    //Sets the --valuePercent var with the
    _setValuePercent() {
        const dif = ((this.val! - this.min!) / (this.max! - this.min!)) * 100
        this.el.style.setProperty('--valuePercent', `${dif}%`)
    }
    onInput(e: Event) {
        //Update value as slider moves, emit the rux-input event.
        const target = e.target as HTMLInputElement
        this.val = parseInt(target.value)
        this.el.style.setProperty('--value', target.value)
        this._setValuePercent()

        this.ruxInput.emit()
    }
    onClick(e: Event) {
        const target = e.target as HTMLInputElement
        this.val = parseInt(target.value)
        this.el.style.setProperty('--value', target.value)
        this._setValuePercent()

        this.ruxInput.emit()
    }

    render() {
        return (
            <Host>
                <div class="rux-slider" onClick={(e) => this.onInput(e)}>
                    <input
                        onInput={this.onInput}
                        type="range"
                        class="rux-range"
                        min={this.min}
                        max={this.max}
                        value={this.val}
                        step={this.step}
                        disabled={this.disabled ? true : false}
                    ></input>
                </div>
                <slot></slot>
            </Host>
        )
    }
}

/*
  min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      step: {
        type: Number,
      },
      val: {
        type: Number,
        reflect: true,
      },
      label: {
        type: String,
      },
      axisLabels: {
        type: Array,
      },
      disabled: {
        type: Boolean,
      },
      hideInput: {
        type: Boolean,
      },
    };
  }
  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.val = 0;
    this.label = '';
    (this.axisLabels = []), (this.disabled = false);
    this.hideInput = false;
    this.browser = this.getBrowser(navigator.userAgent.toLowerCase());
    this.addEventListener('click', this.clickHandler);
  }

  clickHandler(e) {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }

  firstUpdated() {
    this._updateValue();
  }

  getBrowser(ua) {
    if (ua.indexOf('chrome') > -1) {
      return 'chrome';
    } else if (ua.indexOf('safari') > -1) {
      return 'safari';
    } else if (ua.indexOf('firefox') > -1) {
      return 'firefox';
    }
  }

  _updateValue(e) {
    this.val = e ? e.target.value : this.val;
    const dif = ((this.val - this.min) / (this.max - this.min)) * 100;
    this.style.setProperty('--value', dif);
  }

 <div class="rux-slider">
        <div class="rux-form-field rux-form-field--small rux-slider__label">
          <label class="rux-label" id="ruxSlider" ?hidden="${!this.label}">${this.label}</label>
          <input
            class="rux-input rux-slider__input"
            type="number"
            @input="${this._updateValue}"
            .min="${this.min.toString()}"
            .max="${this.max.toString()}"
            .step="${this.step.toString()}"
            .value="${this.val.toString()}"
            aria-labelledby="ruxSlider"
            ?hidden="${this.hideInput}"
            ?disabled="${this.disabled}"
          />
        </div>
        <div class="rux-slider__control ${this.disabled ? 'disabled' : ''}">
          
          <input
            type="range"
            @input="${this._updateValue}"
            class="rux-range"
            type="range"
            .min="${this.min.toString()}"
            .max="${this.max.toString()}"
            .step="${this.step.toString()}"
            .value="${this.val.toString()}"
            aria-labelledby="ruxSlider"
            ?disabled="${this.disabled}"
            list="steplist"
          />
          
          <ol
            class="rux-slider__control__labels"
            data-count="${this.axisLabels.length}"
            ?hidden="${!this.axisLabels.length}"
            id="steplist"
          >
            ${this.axisLabels.map(
      (item) => html`
                <li>${item}</li>
              `
  )}
          </ol>
        </div>
      </div>
    `;
  }
}
customElements.define('rux-slider', RuxSlider);


*/
