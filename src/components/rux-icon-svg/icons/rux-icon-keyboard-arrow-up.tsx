import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-arrow-up.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-arrow-up',
  shadow: false,
})
export class RuxIconKeyboardArrowUp {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-arrow-up`}></use>
      </svg>
    );
  }
}
