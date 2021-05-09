import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/swap-horiz.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-swap-horiz',
  shadow: false,
})
export class RuxIconSwapHoriz {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#swap-horiz`}></use>
      </svg>
    );
  }
}
