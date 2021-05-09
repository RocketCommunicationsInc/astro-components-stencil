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
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assessment`}></use>
      </svg>
    );
  }
}
