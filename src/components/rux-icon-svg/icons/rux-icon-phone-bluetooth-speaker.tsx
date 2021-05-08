import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-bluetooth-speaker.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-bluetooth-speaker',
  shadow: false,
})
export class RuxIconPhoneBluetoothSpeaker {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-bluetooth-speaker`}></use>
      </svg>
    );
  }
}
