import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/free-breakfast.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-free-breakfast',
  shadow: false,
})
export class RuxIconFreeBreakfast {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#free-breakfast`}></use>
      </svg>
    );
  }
}
