import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-1.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-1',
  shadow: false,
})
export class RuxIconFilter1 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-1`}></use>
      </svg>
    );
  }
}
