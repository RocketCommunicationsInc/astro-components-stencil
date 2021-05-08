import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/calendar-view-day.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-calendar-view-day',
  shadow: false,
})
export class RuxIconCalendarViewDay {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#calendar-view-day`}></use>
      </svg>
    );
  }
}
