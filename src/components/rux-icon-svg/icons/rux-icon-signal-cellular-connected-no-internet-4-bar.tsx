import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-connected-no-internet-4-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-connected-no-internet-4-bar',
  shadow: false,
})
export class RuxIconSignalCellularConnectedNoInternet4Bar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-connected-no-internet-4-bar`}></use>
      </svg>
    );
  }
}
