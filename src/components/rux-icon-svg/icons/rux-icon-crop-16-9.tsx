import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-16-9.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-16-9',
  shadow: false,
})
export class RuxIconCrop169 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-16-9`}></use>
      </svg>
    );
  }
}
