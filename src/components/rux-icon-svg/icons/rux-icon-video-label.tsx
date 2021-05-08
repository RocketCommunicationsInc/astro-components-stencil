import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/video-label.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-video-label',
  shadow: false,
})
export class RuxIconVideoLabel {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#video-label`}></use>
      </svg>
    );
  }
}
