import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/chat-bubble.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-chat-bubble',
  shadow: false,
})
export class RuxIconChatBubble {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#chat-bubble`}></use>
      </svg>
    );
  }
}
