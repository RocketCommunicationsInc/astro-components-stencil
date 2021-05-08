import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/money.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-money',
  shadow: false,
})
export class RuxIconMoney {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#money`}></use>
      </svg>
    );
  }
}
