import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/image-aspect-ratio.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-image-aspect-ratio',
  shadow: false,
})
export class RuxIconImageAspectRatio {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#image-aspect-ratio`}></use>
      </svg>
    );
  }
}
