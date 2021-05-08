import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-done.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-done',
  shadow: false,
})
export class RuxIconCloudDone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-done`}></use>
      </svg>
    );
  }
}
