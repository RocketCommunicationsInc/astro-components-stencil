import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vpn-key.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vpn-key',
  shadow: false,
})
export class RuxIconVpnKey {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vpn-key`}></use>
      </svg>
    );
  }
}
