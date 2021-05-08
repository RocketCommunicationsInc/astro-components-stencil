import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/record-voice-over.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-record-voice-over',
  shadow: false,
})
export class RuxIconRecordVoiceOver {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#record-voice-over`}></use>
      </svg>
    );
  }
}
