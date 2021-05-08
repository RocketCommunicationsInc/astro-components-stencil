import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sentiment-very-satisfied.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sentiment-very-satisfied',
  shadow: false,
})
export class RuxIconSentimentVerySatisfied {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sentiment-very-satisfied`}></use>
      </svg>
    );
  }
}
