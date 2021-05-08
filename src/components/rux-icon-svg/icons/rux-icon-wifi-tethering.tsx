import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wifi-tethering.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wifi-tethering',
  shadow: false,
})
export class RuxIconWifiTethering {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wifi-tethering`}></use>
      </svg>
    );
  }
}
