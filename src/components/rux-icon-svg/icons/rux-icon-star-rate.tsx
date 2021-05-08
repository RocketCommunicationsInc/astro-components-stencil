import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/star-rate.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-star-rate',
  shadow: false,
})
export class RuxIconStarRate {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#star-rate`}></use>
      </svg>
    );
  }
}
