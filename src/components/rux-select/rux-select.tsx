import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-select',
  styleUrl: 'rux-select.scss',
  shadow: true,
})
export class RuxSelect {
  /**
    * Disables the item
    */
  @Prop({ reflect: true }) disabled: boolean = false

  /**
    * Sets the field as required
   */
  @Prop({reflect: true}) required: boolean = false


  render() {
    return (
      <Host>
        <select
          disabled={this.disabled ? true : false}
          required={this.required ? true : false}
        >
          <slot></slot>
        </select>
      </Host>
    );
  }

}
