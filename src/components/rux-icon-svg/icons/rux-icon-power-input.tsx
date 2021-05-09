import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/power-input.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-power-input',
  shadow: false,
})
export class RuxIconPowerInput {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#power-input`}></use>
      </svg>
    );
  }
}
