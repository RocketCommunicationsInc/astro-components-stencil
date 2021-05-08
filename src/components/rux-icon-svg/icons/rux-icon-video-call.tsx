import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/video-call.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-video-call',
  shadow: false,
})
export class RuxIconVideoCall {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#video-call`}></use>
      </svg>
    );
  }
}
