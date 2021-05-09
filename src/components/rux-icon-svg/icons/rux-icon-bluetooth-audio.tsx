import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bluetooth-audio.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bluetooth-audio',
  shadow: false,
})
export class RuxIconBluetoothAudio {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bluetooth-audio`}></use>
      </svg>
    );
  }
}
