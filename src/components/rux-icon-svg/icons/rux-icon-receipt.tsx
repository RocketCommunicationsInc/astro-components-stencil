import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/receipt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-receipt',
  shadow: false,
})
export class RuxIconReceipt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#receipt`}></use>
      </svg>
    );
  }
}
