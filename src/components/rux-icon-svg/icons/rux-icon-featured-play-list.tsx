import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/featured-play-list.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-featured-play-list',
  shadow: false,
})
export class RuxIconFeaturedPlayList {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#featured-play-list`}></use>
      </svg>
    );
  }
}
