import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sentiment-satisfied.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sentiment-satisfied',
  shadow: false,
})
export class RuxIconSentimentSatisfied {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sentiment-satisfied`}></use>
      </svg>
    );
  }
}
