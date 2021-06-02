import { Component, Event, Watch, EventEmitter, Prop, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-switch',
    styleUrl: 'rux-switch.css',
    shadow: true,
})
export class RuxSwitch {
    private inputId = `rux-switch-${id++}`;
    @Prop() value?: string | null = 'on'
    @Prop() name: string
    @Prop() checked: boolean = false;

     /**
   * Emitted when the value property has changed.
   */
  @Event({eventName: 'rux-change'}) ruxChange!: EventEmitter;

  @Watch('checked')
  checkedChanged(checked: boolean) {
    this.ruxChange.emit(checked);
  }

    handleClick() {
      this.checked = !this.checked;
    }

    render() {
        return (
            <Host onClick={this.handleClick}>
                <div class="rux-switch">
                    <input
                        id={this.inputId}
                        class="rux-switch__input"
                        type="checkbox"
                        name={this.name}
                        checked={this.checked}
                    />
                    <label
                        class="rux-switch__button"
                        htmlFor={this.inputId}
                    >
                    </label>
                </div>
            </Host>
        )
    }
}

let id = 0;
