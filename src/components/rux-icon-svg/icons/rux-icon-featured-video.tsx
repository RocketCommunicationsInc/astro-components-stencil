import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/featured-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-featured-video',
  shadow: false,
})
export class RuxIconFeaturedVideo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#featured-video`}></use>
      </svg>
    );
  }
}
