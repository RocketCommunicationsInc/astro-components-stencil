import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/payment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-payment',
  shadow: false,
})
export class RuxIconPayment {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#payment`}></use>
      </svg>
    );
  }
}
