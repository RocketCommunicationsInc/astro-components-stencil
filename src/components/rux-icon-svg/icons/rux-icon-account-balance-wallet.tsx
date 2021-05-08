import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/account-balance-wallet.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-account-balance-wallet',
  shadow: false,
})
export class RuxIconAccountBalanceWallet {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#account-balance-wallet`}></use>
      </svg>
    );
  }
}
