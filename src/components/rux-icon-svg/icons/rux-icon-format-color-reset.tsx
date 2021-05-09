import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-color-reset.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-color-reset',
  shadow: false,
})
export class RuxIconFormatColorReset {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-color-reset`}></use>
      </svg>
    );
  }
}
