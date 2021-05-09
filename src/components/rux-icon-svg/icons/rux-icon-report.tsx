import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/report.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-report',
  shadow: false,
})
export class RuxIconReport {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#report`}></use>
      </svg>
    );
  }
}
