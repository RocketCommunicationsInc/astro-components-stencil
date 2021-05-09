import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-free.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-free',
  shadow: false,
})
export class RuxIconCropFree {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-free`}></use>
      </svg>
    );
  }
}
