import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/videocam.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-videocam',
  shadow: false,
})
export class RuxIconVideocam {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#videocam`}></use>
      </svg>
    );
  }
}
