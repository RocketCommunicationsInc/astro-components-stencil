import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-size-select-actual.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-size-select-actual',
  shadow: false,
})
export class RuxIconPhotoSizeSelectActual {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-size-select-actual`}></use>
      </svg>
    );
  }
}
