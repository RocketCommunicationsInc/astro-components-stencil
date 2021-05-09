import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/satellite.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-satellite',
  shadow: false,
})
export class RuxIconSatellite {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#satellite`}></use>
      </svg>
    );
  }
}
