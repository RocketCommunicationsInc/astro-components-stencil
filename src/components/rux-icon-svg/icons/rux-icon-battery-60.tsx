import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-60.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-60',
  shadow: false,
})
export class RuxIconBattery60 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-60`}></use>
      </svg>
    );
  }
}
