import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-square.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-square',
  shadow: false,
})
export class RuxIconCropSquare {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-square`}></use>
      </svg>
    );
  }
}
