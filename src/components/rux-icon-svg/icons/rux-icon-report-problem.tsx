import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/report-problem.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-report-problem',
  shadow: false,
})
export class RuxIconReportProblem {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#report-problem`}></use>
      </svg>
    );
  }
}
