import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-unknown.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-unknown',
  shadow: false,
})
export class RuxIconBatteryUnknown {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-unknown`}></use>
      </svg>
    );
  }
}
