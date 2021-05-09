import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/disc-full.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-disc-full',
  shadow: false,
})
export class RuxIconDiscFull {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#disc-full`}></use>
      </svg>
    );
  }
}
