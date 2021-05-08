import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-list.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-list',
  shadow: false,
})
export class RuxIconFilterList {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-list`}></use>
      </svg>
    );
  }
}
