import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-select',
  styleUrl: 'rux-select.scss',
  shadow: false,
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

  /**
    * Sets the Label for the Select
   */
  @Prop() label?: string | undefined

  /**
   * The text to display when the select is empty.
   */
  // @Prop() placeholder?: string | null;

  render() {
    const {disabled, required, label} = this
    return (
      <Host>
        {label && <label>{label}</label>}
        <select
          class="rux-select"
          disabled={disabled}
          required={required}
        >
          <slot></slot>
        </select>
      </Host>
    );
  }

}
