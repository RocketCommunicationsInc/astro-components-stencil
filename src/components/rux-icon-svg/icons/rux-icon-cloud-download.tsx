import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-download.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-download',
  shadow: false,
})
export class RuxIconCloudDownload {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-download`}></use>
      </svg>
    );
  }
}
