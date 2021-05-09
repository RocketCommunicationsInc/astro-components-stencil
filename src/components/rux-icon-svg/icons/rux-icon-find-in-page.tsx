import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/find-in-page.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-find-in-page',
  shadow: false,
})
export class RuxIconFindInPage {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#find-in-page`}></use>
      </svg>
    );
  }
}
