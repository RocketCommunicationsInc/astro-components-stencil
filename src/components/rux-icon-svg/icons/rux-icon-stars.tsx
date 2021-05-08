import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stars.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stars',
  shadow: false,
})
export class RuxIconStars {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stars`}></use>
      </svg>
    );
  }
}
