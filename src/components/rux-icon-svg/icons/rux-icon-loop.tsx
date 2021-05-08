import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/loop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-loop',
  shadow: false,
})
export class RuxIconLoop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#loop`}></use>
      </svg>
    );
  }
}
