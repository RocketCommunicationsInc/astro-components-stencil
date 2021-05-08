import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/account-balance.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-account-balance',
  shadow: false,
})
export class RuxIconAccountBalance {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#account-balance`}></use>
      </svg>
    );
  }
}
