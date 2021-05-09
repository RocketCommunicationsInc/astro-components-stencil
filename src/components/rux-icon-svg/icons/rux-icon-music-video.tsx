import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/music-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-music-video',
  shadow: false,
})
export class RuxIconMusicVideo {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#music-video`}></use>
      </svg>
    );
  }
}
