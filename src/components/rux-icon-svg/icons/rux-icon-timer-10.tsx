import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timer-10.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timer-10',
  shadow: false,
})
export class RuxIconTimer10 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timer-10`}></use>
      </svg>
    );
  }
}
