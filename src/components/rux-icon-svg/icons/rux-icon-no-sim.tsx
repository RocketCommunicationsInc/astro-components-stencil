import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/no-sim.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-no-sim',
  shadow: false,
})
export class RuxIconNoSim {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#no-sim`}></use>
      </svg>
    );
  }
}
