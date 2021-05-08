import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera-roll.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera-roll',
  shadow: false,
})
export class RuxIconCameraRoll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera-roll`}></use>
      </svg>
    );
  }
}
