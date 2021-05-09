import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exposure-neg-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exposure-neg-2',
  shadow: false,
})
export class RuxIconExposureNeg2 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exposure-neg-2`}></use>
      </svg>
    );
  }
}
