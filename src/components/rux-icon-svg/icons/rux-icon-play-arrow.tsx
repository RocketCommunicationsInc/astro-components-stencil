import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/play-arrow.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-play-arrow',
  shadow: false,
})
export class RuxIconPlayArrow {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#play-arrow`}></use>
      </svg>
    );
  }
}
