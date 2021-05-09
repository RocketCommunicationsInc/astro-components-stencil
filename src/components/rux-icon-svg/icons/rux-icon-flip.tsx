import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flip.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flip',
  shadow: false,
})
export class RuxIconFlip {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flip`}></use>
      </svg>
    );
  }
}
