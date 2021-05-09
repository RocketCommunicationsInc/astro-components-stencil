import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/swap-vert.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-swap-vert',
  shadow: false,
})
export class RuxIconSwapVert {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#swap-vert`}></use>
      </svg>
    );
  }
}
