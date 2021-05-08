import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-std.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-std',
  shadow: false,
})
export class RuxIconBatteryStd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-std`}></use>
      </svg>
    );
  }
}
