import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/redeem.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-redeem',
  shadow: false,
})
export class RuxIconRedeem {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#redeem`}></use>
      </svg>
    );
  }
}
