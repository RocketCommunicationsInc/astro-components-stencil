import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/favorite-border.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-favorite-border',
  shadow: false,
})
export class RuxIconFavoriteBorder {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#favorite-border`}></use>
      </svg>
    );
  }
}
