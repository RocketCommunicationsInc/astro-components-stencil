import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/video-library.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-video-library',
  shadow: false,
})
export class RuxIconVideoLibrary {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#video-library`}></use>
      </svg>
    );
  }
}
