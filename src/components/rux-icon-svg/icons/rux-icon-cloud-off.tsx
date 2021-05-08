import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-off',
  shadow: false,
})
export class RuxIconCloudOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-off`}></use>
      </svg>
    );
  }
}
