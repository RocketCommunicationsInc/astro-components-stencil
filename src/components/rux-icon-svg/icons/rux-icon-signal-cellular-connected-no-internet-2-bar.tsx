import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-connected-no-internet-2-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-connected-no-internet-2-bar',
  shadow: false,
})
export class RuxIconSignalCellularConnectedNoInternet2Bar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-connected-no-internet-2-bar`}></use>
      </svg>
    );
  }
}
