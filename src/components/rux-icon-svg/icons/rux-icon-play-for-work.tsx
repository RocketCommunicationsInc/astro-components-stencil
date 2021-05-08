import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/play-for-work.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-play-for-work',
  shadow: false,
})
export class RuxIconPlayForWork {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#play-for-work`}></use>
      </svg>
    );
  }
}
