import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/playlist-play.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-playlist-play',
  shadow: false,
})
export class RuxIconPlaylistPlay {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#playlist-play`}></use>
      </svg>
    );
  }
}
