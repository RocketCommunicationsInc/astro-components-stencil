import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assessment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assessment',
  shadow: false,
})
export class RuxIconAssessment {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assessment`}></use>
      </svg>
    );
  }
}
