import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/feedback.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-feedback',
  shadow: false,
})
export class RuxIconFeedback {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#feedback`}></use>
      </svg>
    );
  }
}
