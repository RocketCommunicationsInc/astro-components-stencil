import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-wifi-4-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-wifi-4-bar',
  shadow: false,
})
export class RuxIconSignalWifi4Bar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-wifi-4-bar`}></use>
      </svg>
    );
  }
}
