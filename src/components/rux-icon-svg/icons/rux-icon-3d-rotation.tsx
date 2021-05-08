import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/3d-rotation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-3d-rotation',
  shadow: false,
})
export class RuxIcon3dRotation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#3d-rotation`}></use>
      </svg>
    );
  }
}
