import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-frames.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-frames',
  shadow: false,
})
export class RuxIconFilterFrames {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-frames`}></use>
      </svg>
    );
  }
}
