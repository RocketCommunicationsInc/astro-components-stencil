import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-switch',
  styleUrl: 'rux-switch.css',
  shadow: true,
})
export class RuxSwitch {

  render() {
    return (
      <Host>
        <div class="rux-switch">
        <input class="rux-switch__input" type="checkbox"/>
        <label class="rux-switch__button" htmlFor="${this._id}">
        </label>
      </div>
      </Host>
    );
  }

}
