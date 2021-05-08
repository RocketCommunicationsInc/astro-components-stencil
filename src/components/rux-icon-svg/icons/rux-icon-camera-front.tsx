import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera-front.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera-front',
  shadow: false,
})
export class RuxIconCameraFront {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera-front`}></use>
      </svg>
    );
  }
}
