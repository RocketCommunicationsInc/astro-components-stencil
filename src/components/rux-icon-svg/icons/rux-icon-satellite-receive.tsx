import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/satellite-receive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-satellite-receive',
  shadow: false,
})
export class RuxIconSatelliteReceive {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#satellite-receive`}></use>
      </svg>
    );
  }
}
