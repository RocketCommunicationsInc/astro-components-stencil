import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cloud-upload.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cloud-upload',
  shadow: false,
})
export class RuxIconCloudUpload {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cloud-upload`}></use>
      </svg>
    );
  }
}
