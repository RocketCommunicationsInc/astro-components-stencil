import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/backspace.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-backspace',
  shadow: false,
})
export class RuxIconBackspace {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#backspace`}></use>
      </svg>
    );
  }
}
