import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'rux-menu-item',
  styleUrl: 'rux-menu-item.scss',
  shadow: true,
})
export class RuxMenuItem {
  @Element() el!: HTMLElement

  @Prop() onClick?: Function
  // @Prop({reflect: true}) label: string

  render() {
    return (
      <Host>
        <li
          // data-key={this.el.id}
          // role="menuitem"
          // onClick={this.onClick()}
        >
          <slot></slot>
        </li>
      </Host>
    );
  }

}
