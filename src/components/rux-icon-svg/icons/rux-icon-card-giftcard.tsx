import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/card-giftcard.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-card-giftcard',
  shadow: false,
})
export class RuxIconCardGiftcard {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#card-giftcard`}></use>
      </svg>
    );
  }
}
