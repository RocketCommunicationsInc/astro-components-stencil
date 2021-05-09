import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/queue-music.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-queue-music',
  shadow: false,
})
export class RuxIconQueueMusic {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#queue-music`}></use>
      </svg>
    );
  }
}
