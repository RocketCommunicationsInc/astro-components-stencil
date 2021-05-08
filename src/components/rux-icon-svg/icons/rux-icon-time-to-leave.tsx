import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/time-to-leave.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-time-to-leave',
  shadow: false,
})
export class RuxIconTimeToLeave {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#time-to-leave`}></use>
      </svg>
    );
  }
}
