import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/album.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-album',
  shadow: false,
})
export class RuxIconAlbum {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#album`}></use>
      </svg>
    );
  }
}
