import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-album.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-album',
  shadow: false,
})
export class RuxIconPhotoAlbum {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-album`}></use>
      </svg>
    );
  }
}
