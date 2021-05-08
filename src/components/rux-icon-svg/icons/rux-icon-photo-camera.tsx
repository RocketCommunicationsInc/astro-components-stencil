import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-camera.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-camera',
  shadow: false,
})
export class RuxIconPhotoCamera {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-camera`}></use>
      </svg>
    );
  }
}
