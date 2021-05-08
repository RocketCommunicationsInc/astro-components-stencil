import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notifications-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notifications-off',
  shadow: false,
})
export class RuxIconNotificationsOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notifications-off`}></use>
      </svg>
    );
  }
}
