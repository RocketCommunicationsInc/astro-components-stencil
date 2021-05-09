import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-legroom-normal.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-legroom-normal',
  shadow: false,
})
export class RuxIconAirlineSeatLegroomNormal {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-legroom-normal`}></use>
      </svg>
    );
  }
}
