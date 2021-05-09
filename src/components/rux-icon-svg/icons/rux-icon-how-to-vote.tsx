import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/how-to-vote.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-how-to-vote',
  shadow: false,
})
export class RuxIconHowToVote {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#how-to-vote`}></use>
      </svg>
    );
  }
}
