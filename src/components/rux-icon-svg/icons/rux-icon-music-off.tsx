import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/music-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-music-off',
  shadow: false,
})
export class RuxIconMusicOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#music-off`}></use>
      </svg>
    );
  }
}
