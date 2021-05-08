import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mic.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mic',
  shadow: false,
})
export class RuxIconMic {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mic`}></use>
      </svg>
    );
  }
}
