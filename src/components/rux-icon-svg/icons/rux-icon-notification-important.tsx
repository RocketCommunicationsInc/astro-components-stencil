import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notification-important.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notification-important',
  shadow: false,
})
export class RuxIconNotificationImportant {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notification-important`}></use>
      </svg>
    );
  }
}
