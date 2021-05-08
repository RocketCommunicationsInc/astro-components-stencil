import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/camera.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-camera',
  shadow: false,
})
export class RuxIconCamera {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#camera`}></use>
      </svg>
    );
  }
}
