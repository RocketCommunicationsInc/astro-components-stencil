import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-day.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-day',
  shadow: false,
})
export class RuxIconViewDay {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-day`}></use>
      </svg>
    );
  }
}
