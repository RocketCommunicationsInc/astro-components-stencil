import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/question-answer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-question-answer',
  shadow: false,
})
export class RuxIconQuestionAnswer {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#question-answer`}></use>
      </svg>
    );
  }
}
