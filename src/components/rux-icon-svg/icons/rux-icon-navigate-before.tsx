import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/navigate-before.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-navigate-before',
  shadow: false,
})
export class RuxIconNavigateBefore {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#navigate-before`}></use>
      </svg>
    );
  }
}
