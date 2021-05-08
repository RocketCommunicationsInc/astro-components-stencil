import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/network-wifi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-network-wifi',
  shadow: false,
})
export class RuxIconNetworkWifi {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#network-wifi`}></use>
      </svg>
    );
  }
}
