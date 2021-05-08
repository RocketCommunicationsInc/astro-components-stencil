import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exposure-zero.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exposure-zero',
  shadow: false,
})
export class RuxIconExposureZero {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exposure-zero`}></use>
      </svg>
    );
  }
}
