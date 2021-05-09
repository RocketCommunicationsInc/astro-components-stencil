import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/computer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-computer',
  shadow: false,
})
export class RuxIconComputer {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#computer`}></use>
      </svg>
    );
  }
}
