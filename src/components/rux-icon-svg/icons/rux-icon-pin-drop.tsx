import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pin-drop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pin-drop',
  shadow: false,
})
export class RuxIconPinDrop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pin-drop`}></use>
      </svg>
    );
  }
}
