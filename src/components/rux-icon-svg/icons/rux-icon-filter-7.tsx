import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-7.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-7',
  shadow: false,
})
export class RuxIconFilter7 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-7`}></use>
      </svg>
    );
  }
}
