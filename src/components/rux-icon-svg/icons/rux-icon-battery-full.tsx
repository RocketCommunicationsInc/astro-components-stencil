import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-full.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-full',
  shadow: false,
})
export class RuxIconBatteryFull {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-full`}></use>
      </svg>
    );
  }
}
