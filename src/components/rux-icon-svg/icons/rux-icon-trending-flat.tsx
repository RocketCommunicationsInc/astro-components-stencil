import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/trending-flat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-trending-flat',
  shadow: false,
})
export class RuxIconTrendingFlat {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#trending-flat`}></use>
      </svg>
    );
  }
}
