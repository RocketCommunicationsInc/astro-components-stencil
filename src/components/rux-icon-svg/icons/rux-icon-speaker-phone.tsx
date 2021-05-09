import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker-phone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker-phone',
  shadow: false,
})
export class RuxIconSpeakerPhone {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker-phone`}></use>
      </svg>
    );
  }
}
