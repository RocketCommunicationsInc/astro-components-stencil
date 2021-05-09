import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notifications.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notifications',
  shadow: false,
})
export class RuxIconNotifications {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notifications`}></use>
      </svg>
    );
  }
}
