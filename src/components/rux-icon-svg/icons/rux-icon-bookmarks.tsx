import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bookmarks.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bookmarks',
  shadow: false,
})
export class RuxIconBookmarks {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bookmarks`}></use>
      </svg>
    );
  }
}
