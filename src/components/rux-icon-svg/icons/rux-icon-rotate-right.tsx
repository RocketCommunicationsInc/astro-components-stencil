import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/rotate-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-rotate-right',
  shadow: false,
})
export class RuxIconRotateRight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#rotate-right`}></use>
      </svg>
    );
  }
}
