import { Component, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'rux-menu-item',
  styleUrl: 'rux-menu-item.scss',
  shadow: true,
})
export class RuxMenuItem {
  @Element() el!: HTMLRuxMenuItemElement

  /**
   * Emitted when item is clicked
   */
  @Event() itemClicked: EventEmitter<HTMLRuxMenuItemElement>

  @Prop({reflect: true}) disabled: boolean = false

  render() {
    const {disabled} = this
    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
      >
        <li
          // data-key={this.el.id}
          // role="menuitem"
          onClick={() => this.itemClicked.emit(this.el)}
        >
          <slot></slot>
        </li>
      </Host>
    );
  }

}
