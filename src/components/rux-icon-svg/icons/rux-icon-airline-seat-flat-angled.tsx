import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-flat-angled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-flat-angled',
  shadow: false,
})
export class RuxIconAirlineSeatFlatAngled {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-flat-angled`}></use>
      </svg>
    );
  }
}
