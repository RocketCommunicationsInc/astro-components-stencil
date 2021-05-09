import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-drama.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-drama',
  shadow: false,
})
export class RuxIconFilterDrama {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-drama`}></use>
      </svg>
    );
  }
}
