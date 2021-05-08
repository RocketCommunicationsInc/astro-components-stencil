import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/broken-image.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-broken-image',
  shadow: false,
})
export class RuxIconBrokenImage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#broken-image`}></use>
      </svg>
    );
  }
}
