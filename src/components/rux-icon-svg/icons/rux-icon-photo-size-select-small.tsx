import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-size-select-small.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-size-select-small',
  shadow: false,
})
export class RuxIconPhotoSizeSelectSmall {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-size-select-small`}></use>
      </svg>
    );
  }
}
