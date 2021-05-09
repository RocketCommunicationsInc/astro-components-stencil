import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/print.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-print',
  shadow: false,
})
export class RuxIconPrint {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#print`}></use>
      </svg>
    );
  }
}
