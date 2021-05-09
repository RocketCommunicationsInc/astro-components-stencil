import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/expand-less.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-expand-less',
  shadow: false,
})
export class RuxIconExpandLess {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#expand-less`}></use>
      </svg>
    );
  }
}
