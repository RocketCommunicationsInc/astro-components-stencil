import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove-red-eye.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove-red-eye',
  shadow: false,
})
export class RuxIconRemoveRedEye {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove-red-eye`}></use>
      </svg>
    );
  }
}
