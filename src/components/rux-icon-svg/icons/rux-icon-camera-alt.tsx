import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera-alt',
  shadow: false,
})
export class RuxIconCameraAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera-alt`}></use>
      </svg>
    );
  }
}
