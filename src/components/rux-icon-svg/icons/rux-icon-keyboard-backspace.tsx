import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-backspace.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-backspace',
  shadow: false,
})
export class RuxIconKeyboardBackspace {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-backspace`}></use>
      </svg>
    );
  }
}
