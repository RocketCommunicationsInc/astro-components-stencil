import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-arrow-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-arrow-down',
  shadow: false,
})
export class RuxIconKeyboardArrowDown {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-arrow-down`}></use>
      </svg>
    );
  }
}
