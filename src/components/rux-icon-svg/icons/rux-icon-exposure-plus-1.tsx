import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exposure-plus-1.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exposure-plus-1',
  shadow: false,
})
export class RuxIconExposurePlus1 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exposure-plus-1`}></use>
      </svg>
    );
  }
}
