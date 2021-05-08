import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notifications-active.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notifications-active',
  shadow: false,
})
export class RuxIconNotificationsActive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notifications-active`}></use>
      </svg>
    );
  }
}
