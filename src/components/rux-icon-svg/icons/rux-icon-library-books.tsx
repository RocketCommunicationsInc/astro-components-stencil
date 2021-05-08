import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/library-books.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-library-books',
  shadow: false,
})
export class RuxIconLibraryBooks {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#library-books`}></use>
      </svg>
    );
  }
}
