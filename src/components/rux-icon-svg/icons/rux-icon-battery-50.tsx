import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-50.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-50',
  shadow: false,
})
export class RuxIconBattery50 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-50`}></use>
      </svg>
    );
  }
}
