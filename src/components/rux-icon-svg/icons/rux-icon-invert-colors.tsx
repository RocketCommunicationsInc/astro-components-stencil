import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/invert-colors.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-invert-colors',
  shadow: false,
})
export class RuxIconInvertColors {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#invert-colors`}></use>
      </svg>
    );
  }
}
