import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/table-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-table-chart',
  shadow: false,
})
export class RuxIconTableChart {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#table-chart`}></use>
      </svg>
    );
  }
}
