import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/trip-origin.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-trip-origin',
  shadow: false,
})
export class RuxIconTripOrigin {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#trip-origin`}></use>
      </svg>
    );
  }
}
