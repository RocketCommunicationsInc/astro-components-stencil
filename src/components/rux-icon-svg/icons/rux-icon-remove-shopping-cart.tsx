import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove-shopping-cart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove-shopping-cart',
  shadow: false,
})
export class RuxIconRemoveShoppingCart {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove-shopping-cart`}></use>
      </svg>
    );
  }
}
