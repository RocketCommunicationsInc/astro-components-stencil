import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/screen-rotation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-screen-rotation',
  shadow: false,
})
export class RuxIconScreenRotation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#screen-rotation`}></use>
      </svg>
    );
  }
}
