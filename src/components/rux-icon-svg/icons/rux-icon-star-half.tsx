import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/star-half.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-star-half',
  shadow: false,
})
export class RuxIconStarHalf {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#star-half`}></use>
      </svg>
    );
  }
}
