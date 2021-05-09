import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/music-note.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-music-note',
  shadow: false,
})
export class RuxIconMusicNote {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#music-note`}></use>
      </svg>
    );
  }
}
