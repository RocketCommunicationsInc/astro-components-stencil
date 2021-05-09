import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/next-week.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-next-week',
  shadow: false,
})
export class RuxIconNextWeek {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#next-week`}></use>
      </svg>
    );
  }
}
