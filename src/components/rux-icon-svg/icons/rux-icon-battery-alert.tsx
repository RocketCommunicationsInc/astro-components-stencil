import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-alert.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-alert',
  shadow: false,
})
export class RuxIconBatteryAlert {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-alert`}></use>
      </svg>
    );
  }
}
