import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/book.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-book',
  shadow: false,
})
export class RuxIconBook {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#book`}></use>
      </svg>
    );
  }
}
