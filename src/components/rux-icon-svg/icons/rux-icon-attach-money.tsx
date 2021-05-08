import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/attach-money.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-attach-money',
  shadow: false,
})
export class RuxIconAttachMoney {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#attach-money`}></use>
      </svg>
    );
  }
}
