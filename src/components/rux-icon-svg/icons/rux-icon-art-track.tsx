import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/art-track.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-art-track',
  shadow: false,
})
export class RuxIconArtTrack {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#art-track`}></use>
      </svg>
    );
  }
}
