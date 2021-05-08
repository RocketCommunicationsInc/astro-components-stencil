import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/queue-play-next.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-queue-play-next',
  shadow: false,
})
export class RuxIconQueuePlayNext {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#queue-play-next`}></use>
      </svg>
    );
  }
}
