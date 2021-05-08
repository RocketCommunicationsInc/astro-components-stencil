import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-camera-mic.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-camera-mic',
  shadow: false,
})
export class RuxIconPermCameraMic {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-camera-mic`}></use>
      </svg>
    );
  }
}
