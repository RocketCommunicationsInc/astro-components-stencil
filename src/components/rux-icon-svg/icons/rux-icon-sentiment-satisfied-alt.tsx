import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sentiment-satisfied-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sentiment-satisfied-alt',
  shadow: false,
})
export class RuxIconSentimentSatisfiedAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sentiment-satisfied-alt`}></use>
      </svg>
    );
  }
}
