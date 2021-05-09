import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gamepad.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gamepad',
  shadow: false,
})
export class RuxIconGamepad {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gamepad`}></use>
      </svg>
    );
  }
}
