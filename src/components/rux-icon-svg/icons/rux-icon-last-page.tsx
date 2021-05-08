import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/last-page.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-last-page',
  shadow: false,
})
export class RuxIconLastPage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#last-page`}></use>
      </svg>
    );
  }
}
