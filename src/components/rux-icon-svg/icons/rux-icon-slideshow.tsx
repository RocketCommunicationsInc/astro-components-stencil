import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/slideshow.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-slideshow',
  shadow: false,
})
export class RuxIconSlideshow {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#slideshow`}></use>
      </svg>
    );
  }
}
