import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/voicemail.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-voicemail',
  shadow: false,
})
export class RuxIconVoicemail {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#voicemail`}></use>
      </svg>
    );
  }
}
