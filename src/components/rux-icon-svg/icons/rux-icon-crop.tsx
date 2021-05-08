import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop',
  shadow: false,
})
export class RuxIconCrop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop`}></use>
      </svg>
    );
  }
}
