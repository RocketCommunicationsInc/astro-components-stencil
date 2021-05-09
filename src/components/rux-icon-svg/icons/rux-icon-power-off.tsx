import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/power-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-power-off',
  shadow: false,
})
export class RuxIconPowerOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#power-off`}></use>
      </svg>
    );
  }
}
