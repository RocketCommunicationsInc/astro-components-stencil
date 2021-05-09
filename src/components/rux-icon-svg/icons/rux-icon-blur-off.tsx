import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/blur-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-blur-off',
  shadow: false,
})
export class RuxIconBlurOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#blur-off`}></use>
      </svg>
    );
  }
}
