import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/swap-vertical-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-swap-vertical-circle',
  shadow: false,
})
export class RuxIconSwapVerticalCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#swap-vertical-circle`}></use>
      </svg>
    );
  }
}
