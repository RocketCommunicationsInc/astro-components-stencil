import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mode-comment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mode-comment',
  shadow: false,
})
export class RuxIconModeComment {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mode-comment`}></use>
      </svg>
    );
  }
}
