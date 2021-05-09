import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/poll.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-poll',
  shadow: false,
})
export class RuxIconPoll {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#poll`}></use>
      </svg>
    );
  }
}
