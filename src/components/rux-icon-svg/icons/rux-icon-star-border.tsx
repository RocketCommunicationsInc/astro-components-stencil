import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/star-border.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-star-border',
  shadow: false,
})
export class RuxIconStarBorder {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#star-border`}></use>
      </svg>
    );
  }
}
