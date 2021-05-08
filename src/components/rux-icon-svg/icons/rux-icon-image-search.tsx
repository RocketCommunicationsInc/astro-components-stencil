import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/image-search.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-image-search',
  shadow: false,
})
export class RuxIconImageSearch {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#image-search`}></use>
      </svg>
    );
  }
}
