import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-array.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-array',
  shadow: false,
})
export class RuxIconViewArray {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-array`}></use>
      </svg>
    );
  }
}
