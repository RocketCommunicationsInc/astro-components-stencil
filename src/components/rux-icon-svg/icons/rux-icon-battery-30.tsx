import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-30.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-30',
  shadow: false,
})
export class RuxIconBattery30 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-30`}></use>
      </svg>
    );
  }
}
