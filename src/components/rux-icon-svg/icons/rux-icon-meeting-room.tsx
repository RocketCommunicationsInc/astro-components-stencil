import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/meeting-room.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-meeting-room',
  shadow: false,
})
export class RuxIconMeetingRoom {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#meeting-room`}></use>
      </svg>
    );
  }
}
