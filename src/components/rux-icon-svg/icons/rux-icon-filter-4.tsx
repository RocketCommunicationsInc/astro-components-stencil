import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-4.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-4',
  shadow: false,
})
export class RuxIconFilter4 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-4`}></use>
      </svg>
    );
  }
}
