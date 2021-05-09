import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timer-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timer-off',
  shadow: false,
})
export class RuxIconTimerOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timer-off`}></use>
      </svg>
    );
  }
}
