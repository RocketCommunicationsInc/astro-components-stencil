import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sync-problem.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sync-problem',
  shadow: false,
})
export class RuxIconSyncProblem {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sync-problem`}></use>
      </svg>
    );
  }
}
