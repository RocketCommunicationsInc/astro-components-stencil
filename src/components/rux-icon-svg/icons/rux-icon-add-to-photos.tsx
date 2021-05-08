import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-to-photos.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-to-photos',
  shadow: false,
})
export class RuxIconAddToPhotos {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-to-photos`}></use>
      </svg>
    );
  }
}
