import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-legroom-extra.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-legroom-extra',
  shadow: false,
})
export class RuxIconAirlineSeatLegroomExtra {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-legroom-extra`}></use>
      </svg>
    );
  }
}
