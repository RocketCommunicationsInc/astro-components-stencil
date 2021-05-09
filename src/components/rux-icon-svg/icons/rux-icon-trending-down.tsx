import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/trending-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-trending-down',
  shadow: false,
})
export class RuxIconTrendingDown {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#trending-down`}></use>
      </svg>
    );
  }
}
