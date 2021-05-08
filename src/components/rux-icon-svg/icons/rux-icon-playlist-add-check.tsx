import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/playlist-add-check.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-playlist-add-check',
  shadow: false,
})
export class RuxIconPlaylistAddCheck {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#playlist-add-check`}></use>
      </svg>
    );
  }
}
