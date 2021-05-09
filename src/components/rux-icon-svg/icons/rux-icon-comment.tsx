import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/comment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-comment',
  shadow: false,
})
export class RuxIconComment {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#comment`}></use>
      </svg>
    );
  }
}
