import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-rotate.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-rotate',
  shadow: false,
})
export class RuxIconCropRotate {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-rotate`}></use>
      </svg>
    );
  }
}
