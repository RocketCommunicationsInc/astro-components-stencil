import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-wifi-0-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-wifi-0-bar',
  shadow: false,
})
export class RuxIconSignalWifi0Bar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-wifi-0-bar`}></use>
      </svg>
    );
  }
}
