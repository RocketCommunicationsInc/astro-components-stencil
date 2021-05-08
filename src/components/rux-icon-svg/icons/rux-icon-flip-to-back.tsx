import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flip-to-back.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flip-to-back',
  shadow: false,
})
export class RuxIconFlipToBack {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flip-to-back`}></use>
      </svg>
    );
  }
}
