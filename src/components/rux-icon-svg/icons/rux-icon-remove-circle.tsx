import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove-circle',
  shadow: false,
})
export class RuxIconRemoveCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove-circle`}></use>
      </svg>
    );
  }
}
