import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/switch-video.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-switch-video',
  shadow: false,
})
export class RuxIconSwitchVideo {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#switch-video`}></use>
      </svg>
    );
  }
}
