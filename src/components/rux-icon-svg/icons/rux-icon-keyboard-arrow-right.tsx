import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-arrow-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-arrow-right',
  shadow: false,
})
export class RuxIconKeyboardArrowRight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-arrow-right`}></use>
      </svg>
    );
  }
}
