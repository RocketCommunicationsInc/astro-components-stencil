import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-upward.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-upward',
  shadow: false,
})
export class RuxIconArrowUpward {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-upward`}></use>
      </svg>
    );
  }
}
