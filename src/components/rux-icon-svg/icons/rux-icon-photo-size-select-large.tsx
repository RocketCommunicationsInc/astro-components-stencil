import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-size-select-large.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-size-select-large',
  shadow: false,
})
export class RuxIconPhotoSizeSelectLarge {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-size-select-large`}></use>
      </svg>
    );
  }
}
