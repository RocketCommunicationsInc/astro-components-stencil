import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/print-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-print-disabled',
  shadow: false,
})
export class RuxIconPrintDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#print-disabled`}></use>
      </svg>
    );
  }
}
