import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-landscape.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-landscape',
  shadow: false,
})
export class RuxIconCropLandscape {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-landscape`}></use>
      </svg>
    );
  }
}
