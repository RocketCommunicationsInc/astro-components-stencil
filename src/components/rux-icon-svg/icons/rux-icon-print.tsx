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

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#print`}></use>
      </svg>
    );
  }
}
