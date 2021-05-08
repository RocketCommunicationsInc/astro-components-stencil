import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/watch-later.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-watch-later',
  shadow: false,
})
export class RuxIconWatchLater {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#watch-later`}></use>
      </svg>
    );
  }
}
