import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-queue.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-queue',
  shadow: false,
})
export class RuxIconCloudQueue {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-queue`}></use>
      </svg>
    );
  }
}
