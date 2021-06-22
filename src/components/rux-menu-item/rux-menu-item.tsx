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
  @Event() menuItemClicked: EventEmitter<object>
  private itemOnClick = () => {
    if (this.value) {
      this.menuItemClicked.emit({value: this.value})
    } else {
      this.menuItemClicked.emit({value: this.el.textContent})
    }
  }

  /**
   * Disables the item
  */
  @Prop({reflect: true}) disabled: boolean = false

  /**
   * Value returned when item is selected. If no value is given, the text content will be used.
   */
  @Prop() value: any

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
      >
        <li
          onClick={() => this.itemOnClick()}
        >
          <slot name="start"></slot>
          <slot></slot>
        </li>
      </Host>
    );
  }

}
