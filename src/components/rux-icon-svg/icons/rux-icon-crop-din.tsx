import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-din.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-din',
  shadow: false,
})
export class RuxIconCropDin {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-din`}></use>
      </svg>
    );
  }
}
