import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/data-usage.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-data-usage',
  shadow: false,
})
export class RuxIconDataUsage {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#data-usage`}></use>
      </svg>
    );
  }
}
