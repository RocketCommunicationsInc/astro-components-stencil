import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/devices-other.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-devices-other',
  shadow: false,
})
export class RuxIconDevicesOther {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#devices-other`}></use>
      </svg>
    );
  }
}
