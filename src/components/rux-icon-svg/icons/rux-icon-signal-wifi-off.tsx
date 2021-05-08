import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-wifi-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-wifi-off',
  shadow: false,
})
export class RuxIconSignalWifiOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-wifi-off`}></use>
      </svg>
    );
  }
}
