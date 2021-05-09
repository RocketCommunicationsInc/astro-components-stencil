import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flight-takeoff.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flight-takeoff',
  shadow: false,
})
export class RuxIconFlightTakeoff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flight-takeoff`}></use>
      </svg>
    );
  }
}
