import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-chart',
  shadow: false,
})
export class RuxIconInsertChart {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-chart`}></use>
      </svg>
    );
  }
}
