import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pie-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pie-chart',
  shadow: false,
})
export class RuxIconPieChart {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pie-chart`}></use>
      </svg>
    );
  }
}
