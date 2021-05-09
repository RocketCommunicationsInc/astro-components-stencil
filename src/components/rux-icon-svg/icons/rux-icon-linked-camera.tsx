import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/linked-camera.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-linked-camera',
  shadow: false,
})
export class RuxIconLinkedCamera {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#linked-camera`}></use>
      </svg>
    );
  }
}
