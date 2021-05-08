import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-wifi-1-bar-lock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-wifi-1-bar-lock',
  shadow: false,
})
export class RuxIconSignalWifi1BarLock {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-wifi-1-bar-lock`}></use>
      </svg>
    );
  }
}
