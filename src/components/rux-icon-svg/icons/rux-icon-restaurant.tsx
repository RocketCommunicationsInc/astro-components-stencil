import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/restaurant.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-restaurant',
  shadow: false,
})
export class RuxIconRestaurant {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#restaurant`}></use>
      </svg>
    );
  }
}
