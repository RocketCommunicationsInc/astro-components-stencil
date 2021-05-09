import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/restaurant-menu.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-restaurant-menu',
  shadow: false,
})
export class RuxIconRestaurantMenu {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#restaurant-menu`}></use>
      </svg>
    );
  }
}
