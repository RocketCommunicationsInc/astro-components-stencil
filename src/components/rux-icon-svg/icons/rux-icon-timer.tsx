import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timer',
  shadow: false,
})
export class RuxIconTimer {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timer`}></use>
      </svg>
    );
  }
}
