import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-8.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-8',
  shadow: false,
})
export class RuxIconFilter8 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-8`}></use>
      </svg>
    );
  }
}
