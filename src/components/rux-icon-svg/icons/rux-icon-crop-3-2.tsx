import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-3-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-3-2',
  shadow: false,
})
export class RuxIconCrop32 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-3-2`}></use>
      </svg>
    );
  }
}
