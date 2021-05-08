import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/lock-open.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-lock-open',
  shadow: false,
})
export class RuxIconLockOpen {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#lock-open`}></use>
      </svg>
    );
  }
}
