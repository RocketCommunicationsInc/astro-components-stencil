import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/library-music.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-library-music',
  shadow: false,
})
export class RuxIconLibraryMusic {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#library-music`}></use>
      </svg>
    );
  }
}
