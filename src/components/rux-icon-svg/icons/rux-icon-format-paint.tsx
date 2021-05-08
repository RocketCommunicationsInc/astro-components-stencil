import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-paint.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-paint',
  shadow: false,
})
export class RuxIconFormatPaint {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-paint`}></use>
      </svg>
    );
  }
}
