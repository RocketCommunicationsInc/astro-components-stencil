import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timer-3.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timer-3',
  shadow: false,
})
export class RuxIconTimer3 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timer-3`}></use>
      </svg>
    );
  }
}
