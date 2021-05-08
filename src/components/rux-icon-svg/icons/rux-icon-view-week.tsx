import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-week.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-week',
  shadow: false,
})
export class RuxIconViewWeek {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-week`}></use>
      </svg>
    );
  }
}
