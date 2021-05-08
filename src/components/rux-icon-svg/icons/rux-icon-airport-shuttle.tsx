import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airport-shuttle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airport-shuttle',
  shadow: false,
})
export class RuxIconAirportShuttle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airport-shuttle`}></use>
      </svg>
    );
  }
}
