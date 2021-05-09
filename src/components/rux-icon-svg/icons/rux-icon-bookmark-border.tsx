import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bookmark-border.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bookmark-border',
  shadow: false,
})
export class RuxIconBookmarkBorder {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bookmark-border`}></use>
      </svg>
    );
  }
}
