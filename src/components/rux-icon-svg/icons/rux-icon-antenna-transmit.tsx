import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/antenna-transmit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-antenna-transmit',
  shadow: false,
})
export class RuxIconAntennaTransmit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#antenna-transmit`}></use>
      </svg>
    );
  }
}
