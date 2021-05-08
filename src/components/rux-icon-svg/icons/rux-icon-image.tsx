import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/image.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-image',
  shadow: false,
})
export class RuxIconImage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#image`}></use>
      </svg>
    );
  }
}
