import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/recent-actors.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-recent-actors',
  shadow: false,
})
export class RuxIconRecentActors {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#recent-actors`}></use>
      </svg>
    );
  }
}
