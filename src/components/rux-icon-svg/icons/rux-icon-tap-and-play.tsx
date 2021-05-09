import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tap-and-play.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tap-and-play',
  shadow: false,
})
export class RuxIconTapAndPlay {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tap-and-play`}></use>
      </svg>
    );
  }
}
