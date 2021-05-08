import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/screen-lock-rotation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-screen-lock-rotation',
  shadow: false,
})
export class RuxIconScreenLockRotation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#screen-lock-rotation`}></use>
      </svg>
    );
  }
}
