import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shuffle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shuffle',
  shadow: false,
})
export class RuxIconShuffle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shuffle`}></use>
      </svg>
    );
  }
}
