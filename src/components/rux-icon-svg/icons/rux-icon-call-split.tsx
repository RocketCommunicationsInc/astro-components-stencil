import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-split.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-split',
  shadow: false,
})
export class RuxIconCallSplit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-split`}></use>
      </svg>
    );
  }
}
