import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bar-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bar-chart',
  shadow: false,
})
export class RuxIconBarChart {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bar-chart`}></use>
      </svg>
    );
  }
}
