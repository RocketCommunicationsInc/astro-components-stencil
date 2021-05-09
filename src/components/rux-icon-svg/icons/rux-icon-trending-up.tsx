import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/trending-up.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-trending-up',
  shadow: false,
})
export class RuxIconTrendingUp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#trending-up`}></use>
      </svg>
    );
  }
}
