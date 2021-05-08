import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/control-camera.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-control-camera',
  shadow: false,
})
export class RuxIconControlCamera {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#control-camera`}></use>
      </svg>
    );
  }
}
