import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sentiment-very-dissatisfied.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sentiment-very-dissatisfied',
  shadow: false,
})
export class RuxIconSentimentVeryDissatisfied {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sentiment-very-dissatisfied`}></use>
      </svg>
    );
  }
}
