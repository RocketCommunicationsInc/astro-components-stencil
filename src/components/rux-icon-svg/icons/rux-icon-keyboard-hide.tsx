import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-hide.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-hide',
  shadow: false,
})
export class RuxIconKeyboardHide {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-hide`}></use>
      </svg>
    );
  }
}
