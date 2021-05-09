import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/queue.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-queue',
  shadow: false,
})
export class RuxIconQueue {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#queue`}></use>
      </svg>
    );
  }
}
