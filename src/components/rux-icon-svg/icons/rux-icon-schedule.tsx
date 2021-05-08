import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/schedule.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-schedule',
  shadow: false,
})
export class RuxIconSchedule {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#schedule`}></use>
      </svg>
    );
  }
}
