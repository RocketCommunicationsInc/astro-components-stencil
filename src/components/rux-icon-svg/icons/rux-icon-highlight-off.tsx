import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/highlight-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-highlight-off',
  shadow: false,
})
export class RuxIconHighlightOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#highlight-off`}></use>
      </svg>
    );
  }
}
