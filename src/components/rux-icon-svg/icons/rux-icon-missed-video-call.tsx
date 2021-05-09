import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/missed-video-call.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-missed-video-call',
  shadow: false,
})
export class RuxIconMissedVideoCall {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#missed-video-call`}></use>
      </svg>
    );
  }
}
