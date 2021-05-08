import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/scatter-plot.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-scatter-plot',
  shadow: false,
})
export class RuxIconScatterPlot {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#scatter-plot`}></use>
      </svg>
    );
  }
}
