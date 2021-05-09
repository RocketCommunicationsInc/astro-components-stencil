import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/blur-linear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-blur-linear',
  shadow: false,
})
export class RuxIconBlurLinear {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#blur-linear`}></use>
      </svg>
    );
  }
}
