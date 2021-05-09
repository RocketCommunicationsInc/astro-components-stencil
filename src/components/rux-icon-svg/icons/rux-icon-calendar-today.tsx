import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/calendar-today.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-calendar-today',
  shadow: false,
})
export class RuxIconCalendarToday {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#calendar-today`}></use>
      </svg>
    );
  }
}
