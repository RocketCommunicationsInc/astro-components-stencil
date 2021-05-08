import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dialpad.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dialpad',
  shadow: false,
})
export class RuxIconDialpad {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dialpad`}></use>
      </svg>
    );
  }
}
