import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/where-to-vote.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-where-to-vote',
  shadow: false,
})
export class RuxIconWhereToVote {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#where-to-vote`}></use>
      </svg>
    );
  }
}
