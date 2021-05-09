import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/memory.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-memory',
  shadow: false,
})
export class RuxIconMemory {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#memory`}></use>
      </svg>
    );
  }
}
