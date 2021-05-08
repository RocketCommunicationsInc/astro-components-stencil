import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-color-fill.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-color-fill',
  shadow: false,
})
export class RuxIconFormatColorFill {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-color-fill`}></use>
      </svg>
    );
  }
}
