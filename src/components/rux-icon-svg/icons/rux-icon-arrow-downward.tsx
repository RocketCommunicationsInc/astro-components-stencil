import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-downward.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-downward',
  shadow: false,
})
export class RuxIconArrowDownward {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-downward`}></use>
      </svg>
    );
  }
}
