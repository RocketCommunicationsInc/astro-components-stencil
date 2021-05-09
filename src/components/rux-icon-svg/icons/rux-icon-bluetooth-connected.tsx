import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bluetooth-connected.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bluetooth-connected',
  shadow: false,
})
export class RuxIconBluetoothConnected {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bluetooth-connected`}></use>
      </svg>
    );
  }
}
