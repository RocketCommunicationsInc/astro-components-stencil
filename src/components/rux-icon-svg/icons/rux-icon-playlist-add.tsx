import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/playlist-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-playlist-add',
  shadow: false,
})
export class RuxIconPlaylistAdd {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#playlist-add`}></use>
      </svg>
    );
  }
}
