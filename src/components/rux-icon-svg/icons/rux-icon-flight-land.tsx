import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flight-land.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flight-land',
  shadow: false,
})
export class RuxIconFlightLand {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flight-land`}></use>
      </svg>
    );
  }
}
