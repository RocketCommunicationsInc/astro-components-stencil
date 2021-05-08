import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/report-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-report-off',
  shadow: false,
})
export class RuxIconReportOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#report-off`}></use>
      </svg>
    );
  }
}
