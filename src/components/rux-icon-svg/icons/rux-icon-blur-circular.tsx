import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/blur-circular.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-blur-circular',
  shadow: false,
})
export class RuxIconBlurCircular {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#blur-circular`}></use>
      </svg>
    );
  }
}
