import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-3.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-3',
  shadow: false,
})
export class RuxIconFilter3 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-3`}></use>
      </svg>
    );
  }
}
