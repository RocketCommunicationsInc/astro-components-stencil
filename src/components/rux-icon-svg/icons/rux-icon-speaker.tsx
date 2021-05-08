import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker',
  shadow: false,
})
export class RuxIconSpeaker {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker`}></use>
      </svg>
    );
  }
}
