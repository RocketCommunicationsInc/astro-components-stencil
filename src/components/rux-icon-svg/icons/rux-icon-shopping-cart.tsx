import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shopping-cart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shopping-cart',
  shadow: false,
})
export class RuxIconShoppingCart {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shopping-cart`}></use>
      </svg>
    );
  }
}
