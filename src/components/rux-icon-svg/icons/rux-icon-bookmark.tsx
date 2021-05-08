import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bookmark.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bookmark',
  shadow: false,
})
export class RuxIconBookmark {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bookmark`}></use>
      </svg>
    );
  }
}
