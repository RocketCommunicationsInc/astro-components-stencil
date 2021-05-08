import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/search.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-search',
  shadow: false,
})
export class RuxIconSearch {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#search`}></use>
      </svg>
    );
  }
}
