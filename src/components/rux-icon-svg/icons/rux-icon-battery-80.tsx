import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-80.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-80',
  shadow: false,
})
export class RuxIconBattery80 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-80`}></use>
      </svg>
    );
  }
}
