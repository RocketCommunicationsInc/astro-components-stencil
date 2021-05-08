import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notifications-paused.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notifications-paused',
  shadow: false,
})
export class RuxIconNotificationsPaused {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notifications-paused`}></use>
      </svg>
    );
  }
}
