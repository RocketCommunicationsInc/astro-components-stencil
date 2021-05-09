import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bubble-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bubble-chart',
  shadow: false,
})
export class RuxIconBubbleChart {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bubble-chart`}></use>
      </svg>
    );
  }
}
