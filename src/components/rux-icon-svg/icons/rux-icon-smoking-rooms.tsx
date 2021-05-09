import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/smoking-rooms.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-smoking-rooms',
  shadow: false,
})
export class RuxIconSmokingRooms {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#smoking-rooms`}></use>
      </svg>
    );
  }
}
