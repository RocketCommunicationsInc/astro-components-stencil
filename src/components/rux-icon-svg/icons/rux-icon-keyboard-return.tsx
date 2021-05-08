import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-return.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-return',
  shadow: false,
})
export class RuxIconKeyboardReturn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-return`}></use>
      </svg>
    );
  }
}
