import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shop-two.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shop-two',
  shadow: false,
})
export class RuxIconShopTwo {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shop-two`}></use>
      </svg>
    );
  }
}
