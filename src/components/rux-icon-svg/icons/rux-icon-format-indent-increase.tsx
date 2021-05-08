import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-indent-increase.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-indent-increase',
  shadow: false,
})
export class RuxIconFormatIndentIncrease {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-indent-increase`}></use>
      </svg>
    );
  }
}
