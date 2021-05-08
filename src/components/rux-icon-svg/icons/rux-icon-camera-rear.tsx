import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera-rear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera-rear',
  shadow: false,
})
export class RuxIconCameraRear {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera-rear`}></use>
      </svg>
    );
  }
}
