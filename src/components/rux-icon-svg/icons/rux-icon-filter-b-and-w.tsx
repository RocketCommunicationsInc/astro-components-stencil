import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-b-and-w.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-b-and-w',
  shadow: false,
})
export class RuxIconFilterBAndW {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-b-and-w`}></use>
      </svg>
    );
  }
}
