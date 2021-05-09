import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/voice-chat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-voice-chat',
  shadow: false,
})
export class RuxIconVoiceChat {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#voice-chat`}></use>
      </svg>
    );
  }
}
