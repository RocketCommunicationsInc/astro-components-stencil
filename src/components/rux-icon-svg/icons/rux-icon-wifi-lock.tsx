import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wifi-lock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wifi-lock',
  shadow: false,
})
export class RuxIconWifiLock {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wifi-lock`}></use>
      </svg>
    );
  }
}
