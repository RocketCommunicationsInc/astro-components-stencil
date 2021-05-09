import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/lock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-lock',
  shadow: false,
})
export class RuxIconLock {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#lock`}></use>
      </svg>
    );
  }
}
