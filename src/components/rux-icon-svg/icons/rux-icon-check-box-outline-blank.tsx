import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/check-box-outline-blank.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-check-box-outline-blank',
  shadow: false,
})
export class RuxIconCheckBoxOutlineBlank {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#check-box-outline-blank`}></use>
      </svg>
    );
  }
}
