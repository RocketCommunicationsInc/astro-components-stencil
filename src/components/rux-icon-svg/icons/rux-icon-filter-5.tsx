import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-5.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-5',
  shadow: false,
})
export class RuxIconFilter5 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-5`}></use>
      </svg>
    );
  }
}
