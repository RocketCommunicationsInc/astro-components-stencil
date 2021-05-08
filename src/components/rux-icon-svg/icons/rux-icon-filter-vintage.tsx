import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-vintage.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-vintage',
  shadow: false,
})
export class RuxIconFilterVintage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-vintage`}></use>
      </svg>
    );
  }
}
