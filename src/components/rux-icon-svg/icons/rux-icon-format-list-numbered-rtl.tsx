import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-list-numbered-rtl.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-list-numbered-rtl',
  shadow: false,
})
export class RuxIconFormatListNumberedRtl {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-list-numbered-rtl`}></use>
      </svg>
    );
  }
}
