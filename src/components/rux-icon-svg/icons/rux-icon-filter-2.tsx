import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-2',
  shadow: false,
})
export class RuxIconFilter2 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-2`}></use>
      </svg>
    );
  }
}
