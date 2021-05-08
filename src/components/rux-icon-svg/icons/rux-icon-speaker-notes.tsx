import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker-notes.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker-notes',
  shadow: false,
})
export class RuxIconSpeakerNotes {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker-notes`}></use>
      </svg>
    );
  }
}
