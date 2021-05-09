import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/headset-mic.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-headset-mic',
  shadow: false,
})
export class RuxIconHeadsetMic {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#headset-mic`}></use>
      </svg>
    );
  }
}
