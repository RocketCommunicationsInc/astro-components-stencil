import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-individual-suite.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-individual-suite',
  shadow: false,
})
export class RuxIconAirlineSeatIndividualSuite {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airline-seat-individual-suite`}></use>
      </svg>
    );
  }
}
