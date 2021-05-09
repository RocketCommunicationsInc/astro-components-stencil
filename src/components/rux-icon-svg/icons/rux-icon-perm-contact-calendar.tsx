import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-contact-calendar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-contact-calendar',
  shadow: false,
})
export class RuxIconPermContactCalendar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-contact-calendar`}></use>
      </svg>
    );
  }
}
