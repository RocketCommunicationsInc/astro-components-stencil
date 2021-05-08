import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/alarm.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-alarm',
  shadow: false,
})
export class RuxIconAlarm {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#alarm`}></use>
      </svg>
    );
  }
}
