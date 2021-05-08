import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-flat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-flat',
  shadow: false,
})
export class RuxIconAirlineSeatFlat {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-flat`}></use>
      </svg>
    );
  }
}
