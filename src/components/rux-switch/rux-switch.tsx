import { Component, Prop, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-switch',
    styleUrl: 'rux-switch.css',
    shadow: true,
})
export class RuxSwitch {
    @Prop() value?: string | null = 'on'
    @Prop() name: string

    render() {
        return (
            <Host>
                <div class="rux-switch">
                    <input
                        class="rux-switch__input"
                        value={this.value}
                        type="checkbox"
                        name={this.name}
                    />
                    <label
                        class="rux-switch__button"
                        htmlFor="${this._id}"
                    ></label>
                </div>
            </Host>
        )
    }
}
