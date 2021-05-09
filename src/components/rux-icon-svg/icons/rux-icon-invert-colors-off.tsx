import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/invert-colors-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-invert-colors-off',
  shadow: false,
})
export class RuxIconInvertColorsOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#invert-colors-off`}></use>
      </svg>
    );
  }
}
