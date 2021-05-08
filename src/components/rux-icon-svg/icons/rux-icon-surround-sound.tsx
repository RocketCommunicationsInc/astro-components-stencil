import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/surround-sound.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-surround-sound',
  shadow: false,
})
export class RuxIconSurroundSound {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#surround-sound`}></use>
      </svg>
    );
  }
}
