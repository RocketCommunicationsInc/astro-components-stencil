import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-headline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-headline',
  shadow: false,
})
export class RuxIconViewHeadline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-headline`}></use>
      </svg>
    );
  }
}
