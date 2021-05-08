import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-merge.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-merge',
  shadow: false,
})
export class RuxIconCallMerge {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-merge`}></use>
      </svg>
    );
  }
}
