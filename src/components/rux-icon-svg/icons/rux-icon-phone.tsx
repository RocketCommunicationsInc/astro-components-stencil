import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone',
  shadow: false,
})
export class RuxIconPhone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone`}></use>
      </svg>
    );
  }
}
