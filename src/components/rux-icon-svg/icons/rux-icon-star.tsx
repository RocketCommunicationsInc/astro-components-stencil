import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/star.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-star',
  shadow: false,
})
export class RuxIconStar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#star`}></use>
      </svg>
    );
  }
}
