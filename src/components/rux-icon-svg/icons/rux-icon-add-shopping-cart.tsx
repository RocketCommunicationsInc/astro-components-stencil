import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-shopping-cart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-shopping-cart',
  shadow: false,
})
export class RuxIconAddShoppingCart {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-shopping-cart`}></use>
      </svg>
    );
  }
}
