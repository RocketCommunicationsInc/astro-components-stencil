import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/ondemand-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-ondemand-video',
  shadow: false,
})
export class RuxIconOndemandVideo {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#ondemand-video`}></use>
      </svg>
    );
  }
}
