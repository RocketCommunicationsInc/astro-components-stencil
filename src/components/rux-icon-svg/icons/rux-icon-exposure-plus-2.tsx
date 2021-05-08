import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exposure-plus-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exposure-plus-2',
  shadow: false,
})
export class RuxIconExposurePlus2 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exposure-plus-2`}></use>
      </svg>
    );
  }
}
