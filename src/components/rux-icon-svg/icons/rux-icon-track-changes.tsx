import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/track-changes.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-track-changes',
  shadow: false,
})
export class RuxIconTrackChanges {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#track-changes`}></use>
      </svg>
    );
  }
}
