import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/collections-bookmark.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-collections-bookmark',
  shadow: false,
})
export class RuxIconCollectionsBookmark {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#collections-bookmark`}></use>
      </svg>
    );
  }
}
