import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/money-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-money-off',
  shadow: false,
})
export class RuxIconMoneyOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#money-off`}></use>
      </svg>
    );
  }
}
