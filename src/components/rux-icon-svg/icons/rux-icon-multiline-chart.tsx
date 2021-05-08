import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/multiline-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-multiline-chart',
  shadow: false,
})
export class RuxIconMultilineChart {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#multiline-chart`}></use>
      </svg>
    );
  }
}
