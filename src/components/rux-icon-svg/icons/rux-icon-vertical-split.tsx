import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vertical-split.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vertical-split',
  shadow: false,
})
export class RuxIconVerticalSplit {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vertical-split`}></use>
      </svg>
    );
  }
}
