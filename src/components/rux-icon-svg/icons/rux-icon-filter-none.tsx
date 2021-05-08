import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-none.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-none',
  shadow: false,
})
export class RuxIconFilterNone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-none`}></use>
      </svg>
    );
  }
}
