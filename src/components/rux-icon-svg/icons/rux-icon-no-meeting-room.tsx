import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/no-meeting-room.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-no-meeting-room',
  shadow: false,
})
export class RuxIconNoMeetingRoom {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#no-meeting-room`}></use>
      </svg>
    );
  }
}
