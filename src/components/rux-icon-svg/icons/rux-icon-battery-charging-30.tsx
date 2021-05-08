import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-charging-30.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-charging-30',
  shadow: false,
})
export class RuxIconBatteryCharging30 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-charging-30`}></use>
      </svg>
    );
  }
}
