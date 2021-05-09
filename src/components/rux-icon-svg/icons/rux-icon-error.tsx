import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/error.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-error',
  shadow: false,
})
export class RuxIconError {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#error`}></use>
      </svg>
    );
  }
}
