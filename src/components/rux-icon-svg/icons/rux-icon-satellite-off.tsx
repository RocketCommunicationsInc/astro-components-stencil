import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/satellite-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-satellite-off',
  shadow: false,
})
export class RuxIconSatelliteOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#satellite-off`}></use>
      </svg>
    );
  }
}
