import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gesture.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gesture',
  shadow: false,
})
export class RuxIconGesture {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gesture`}></use>
      </svg>
    );
  }
}
