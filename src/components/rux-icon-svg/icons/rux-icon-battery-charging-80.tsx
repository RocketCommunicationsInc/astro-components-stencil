import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-charging-80.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-charging-80',
  shadow: false,
})
export class RuxIconBatteryCharging80 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-charging-80`}></use>
      </svg>
    );
  }
}
