import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/reply.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-reply',
  shadow: false,
})
export class RuxIconReply {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#reply`}></use>
      </svg>
    );
  }
}
