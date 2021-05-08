import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-capslock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-capslock',
  shadow: false,
})
export class RuxIconKeyboardCapslock {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-capslock`}></use>
      </svg>
    );
  }
}
