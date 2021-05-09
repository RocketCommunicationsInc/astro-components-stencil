import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shop',
  shadow: false,
})
export class RuxIconShop {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shop`}></use>
      </svg>
    );
  }
}
