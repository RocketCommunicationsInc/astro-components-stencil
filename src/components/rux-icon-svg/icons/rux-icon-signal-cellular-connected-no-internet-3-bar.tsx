import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-connected-no-internet-3-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-connected-no-internet-3-bar',
  shadow: false,
})
export class RuxIconSignalCellularConnectedNoInternet3Bar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-connected-no-internet-3-bar`}></use>
      </svg>
    );
  }
}
