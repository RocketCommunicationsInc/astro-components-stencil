import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-to-queue.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-to-queue',
  shadow: false,
})
export class RuxIconAddToQueue {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-to-queue`}></use>
      </svg>
    );
  }
}
