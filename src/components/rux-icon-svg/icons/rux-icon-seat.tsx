import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/seat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-seat',
  shadow: false,
})
export class RuxIconSeat {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#seat`}></use>
      </svg>
    );
  }
}
