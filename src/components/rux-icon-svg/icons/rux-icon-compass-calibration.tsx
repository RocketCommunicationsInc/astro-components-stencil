import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/compass-calibration.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-compass-calibration',
  shadow: false,
})
export class RuxIconCompassCalibration {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#compass-calibration`}></use>
      </svg>
    );
  }
}
