import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-no-sim.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-no-sim',
  shadow: false,
})
export class RuxIconSignalCellularNoSim {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-no-sim`}></use>
      </svg>
    );
  }
}
