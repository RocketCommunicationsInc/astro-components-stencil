import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove-from-queue.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove-from-queue',
  shadow: false,
})
export class RuxIconRemoveFromQueue {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove-from-queue`}></use>
      </svg>
    );
  }
}
