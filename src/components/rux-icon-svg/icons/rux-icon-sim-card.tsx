import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sim-card.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sim-card',
  shadow: false,
})
export class RuxIconSimCard {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sim-card`}></use>
      </svg>
    );
  }
}
