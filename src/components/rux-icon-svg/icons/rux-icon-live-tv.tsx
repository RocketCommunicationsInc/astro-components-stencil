import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/live-tv.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-live-tv',
  shadow: false,
})
export class RuxIconLiveTv {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#live-tv`}></use>
      </svg>
    );
  }
}
