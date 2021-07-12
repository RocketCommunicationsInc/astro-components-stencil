import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-select',
  styleUrl: 'rux-select.scss',
  shadow: true,
})
export class RuxSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
