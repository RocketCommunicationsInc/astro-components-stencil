import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/palette.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-palette',
  shadow: false,
})
export class RuxIconPalette {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#palette`}></use>
      </svg>
    );
  }
}
