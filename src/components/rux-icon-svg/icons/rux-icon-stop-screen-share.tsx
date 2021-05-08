import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stop-screen-share.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stop-screen-share',
  shadow: false,
})
export class RuxIconStopScreenShare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stop-screen-share`}></use>
      </svg>
    );
  }
}
