import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/slow-motion-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-slow-motion-video',
  shadow: false,
})
export class RuxIconSlowMotionVideo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#slow-motion-video`}></use>
      </svg>
    );
  }
}
