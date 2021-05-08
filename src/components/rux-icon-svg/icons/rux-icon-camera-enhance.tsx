import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera-enhance.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera-enhance',
  shadow: false,
})
export class RuxIconCameraEnhance {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera-enhance`}></use>
      </svg>
    );
  }
}
