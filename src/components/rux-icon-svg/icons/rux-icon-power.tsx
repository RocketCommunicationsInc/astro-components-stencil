import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/power.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-power',
  shadow: false,
})
export class RuxIconPower {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#power`}></use>
      </svg>
    );
  }
}
