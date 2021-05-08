import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-circle',
  shadow: false,
})
export class RuxIconCloudCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-circle`}></use>
      </svg>
    );
  }
}
