import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-locked.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-locked',
  shadow: false,
})
export class RuxIconPhoneLocked {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-locked`}></use>
      </svg>
    );
  }
}
