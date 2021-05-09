import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/room-service.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-room-service',
  shadow: false,
})
export class RuxIconRoomService {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#room-service`}></use>
      </svg>
    );
  }
}
