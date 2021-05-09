import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/close.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-close',
  shadow: false,
})
export class RuxIconClose {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#close`}></use>
      </svg>
    );
  }
}
