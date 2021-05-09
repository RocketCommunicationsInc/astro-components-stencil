import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/transit-enterexit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-transit-enterexit',
  shadow: false,
})
export class RuxIconTransitEnterexit {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#transit-enterexit`}></use>
      </svg>
    );
  }
}
