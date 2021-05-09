import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker-group.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker-group',
  shadow: false,
})
export class RuxIconSpeakerGroup {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker-group`}></use>
      </svg>
    );
  }
}
