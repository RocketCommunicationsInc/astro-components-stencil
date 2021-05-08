import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fastfood.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fastfood',
  shadow: false,
})
export class RuxIconFastfood {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fastfood`}></use>
      </svg>
    );
  }
}
