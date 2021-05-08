import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/personal-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-personal-video',
  shadow: false,
})
export class RuxIconPersonalVideo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#personal-video`}></use>
      </svg>
    );
  }
}
