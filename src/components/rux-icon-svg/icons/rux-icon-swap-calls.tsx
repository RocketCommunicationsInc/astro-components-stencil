import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/swap-calls.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-swap-calls',
  shadow: false,
})
export class RuxIconSwapCalls {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#swap-calls`}></use>
      </svg>
    );
  }
}
