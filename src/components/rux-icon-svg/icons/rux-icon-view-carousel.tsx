import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-carousel.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-carousel',
  shadow: false,
})
export class RuxIconViewCarousel {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-carousel`}></use>
      </svg>
    );
  }
}
