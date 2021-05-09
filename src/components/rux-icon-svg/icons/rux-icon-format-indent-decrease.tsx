import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-indent-decrease.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-indent-decrease',
  shadow: false,
})
export class RuxIconFormatIndentDecrease {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-indent-decrease`}></use>
      </svg>
    );
  }
}
