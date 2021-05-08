import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flip-to-front.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flip-to-front',
  shadow: false,
})
export class RuxIconFlipToFront {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flip-to-front`}></use>
      </svg>
    );
  }
}
