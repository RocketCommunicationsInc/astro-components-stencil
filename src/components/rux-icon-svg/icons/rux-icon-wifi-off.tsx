import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wifi-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wifi-off',
  shadow: false,
})
export class RuxIconWifiOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wifi-off`}></use>
      </svg>
    );
  }
}
