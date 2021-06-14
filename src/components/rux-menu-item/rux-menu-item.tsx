import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-menu-item',
  styleUrl: 'rux-menu-item.scss',
  shadow: true,
})
export class RuxMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
