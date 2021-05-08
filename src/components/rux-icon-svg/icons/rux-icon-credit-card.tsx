import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/credit-card.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-credit-card',
  shadow: false,
})
export class RuxIconCreditCard {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#credit-card`}></use>
      </svg>
    );
  }
}
