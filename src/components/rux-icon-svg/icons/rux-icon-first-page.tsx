import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/first-page.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-first-page',
  shadow: false,
})
export class RuxIconFirstPage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#first-page`}></use>
      </svg>
    );
  }
}
