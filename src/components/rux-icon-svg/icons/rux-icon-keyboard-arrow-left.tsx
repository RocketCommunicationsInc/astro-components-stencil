import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-arrow-left.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-arrow-left',
  shadow: false,
})
export class RuxIconKeyboardArrowLeft {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-arrow-left`}></use>
      </svg>
    );
  }
}
