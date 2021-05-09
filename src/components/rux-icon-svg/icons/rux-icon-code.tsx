import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/code.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-code',
  shadow: false,
})
export class RuxIconCode {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#code`}></use>
      </svg>
    );
  }
}
