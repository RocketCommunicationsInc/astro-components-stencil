import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shopping-basket.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shopping-basket',
  shadow: false,
})
export class RuxIconShoppingBasket {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shopping-basket`}></use>
      </svg>
    );
  }
}
