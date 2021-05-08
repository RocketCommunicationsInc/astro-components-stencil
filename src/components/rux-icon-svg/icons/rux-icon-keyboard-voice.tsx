import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-voice.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-voice',
  shadow: false,
})
export class RuxIconKeyboardVoice {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-voice`}></use>
      </svg>
    );
  }
}
