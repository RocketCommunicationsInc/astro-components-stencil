import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-recline-extra.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-recline-extra',
  shadow: false,
})
export class RuxIconAirlineSeatReclineExtra {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-recline-extra`}></use>
      </svg>
    );
  }
}
