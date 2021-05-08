import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/volume-mute.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-volume-mute',
  shadow: false,
})
export class RuxIconVolumeMute {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#volume-mute`}></use>
      </svg>
    );
  }
}
