import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/device-unknown.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-device-unknown',
  shadow: false,
})
export class RuxIconDeviceUnknown {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#device-unknown`}></use>
      </svg>
    );
  }
}
