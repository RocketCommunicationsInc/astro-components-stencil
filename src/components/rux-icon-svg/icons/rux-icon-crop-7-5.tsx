import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-7-5.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-7-5',
  shadow: false,
})
export class RuxIconCrop75 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-7-5`}></use>
      </svg>
    );
  }
}
