import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-original.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-original',
  shadow: false,
})
export class RuxIconCropOriginal {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-original`}></use>
      </svg>
    );
  }
}
