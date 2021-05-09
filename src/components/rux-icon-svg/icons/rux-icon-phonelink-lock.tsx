import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phonelink-lock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phonelink-lock',
  shadow: false,
})
export class RuxIconPhonelinkLock {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phonelink-lock`}></use>
      </svg>
    );
  }
}
