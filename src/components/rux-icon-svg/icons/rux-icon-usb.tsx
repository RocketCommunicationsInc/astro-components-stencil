import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/usb.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-usb',
  shadow: false,
})
export class RuxIconUsb {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#usb`}></use>
      </svg>
    );
  }
}
