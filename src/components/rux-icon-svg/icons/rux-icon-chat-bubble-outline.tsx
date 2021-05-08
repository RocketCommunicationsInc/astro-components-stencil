import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/chat-bubble-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-chat-bubble-outline',
  shadow: false,
})
export class RuxIconChatBubbleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#chat-bubble-outline`}></use>
      </svg>
    );
  }
}
