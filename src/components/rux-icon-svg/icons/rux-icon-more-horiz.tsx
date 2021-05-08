import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/more-horiz.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-more-horiz',
  shadow: false,
})
export class RuxIconMoreHoriz {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#more-horiz`}></use>
      </svg>
    );
  }
}
