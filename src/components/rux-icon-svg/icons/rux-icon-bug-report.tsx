import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bug-report.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bug-report',
  shadow: false,
})
export class RuxIconBugReport {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bug-report`}></use>
      </svg>
    );
  }
}
