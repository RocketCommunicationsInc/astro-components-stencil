import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/swap-horizontal-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-swap-horizontal-circle',
  shadow: false,
})
export class RuxIconSwapHorizontalCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#swap-horizontal-circle`}></use>
      </svg>
    );
  }
}
