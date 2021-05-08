import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-90.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-90',
  shadow: false,
})
export class RuxIconBattery90 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-90`}></use>
      </svg>
    );
  }
}
