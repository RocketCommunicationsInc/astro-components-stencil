import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/reply-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-reply-all',
  shadow: false,
})
export class RuxIconReplyAll {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#reply-all`}></use>
      </svg>
    );
  }
}
