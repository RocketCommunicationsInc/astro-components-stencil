import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/contact-phone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-contact-phone',
  shadow: false,
})
export class RuxIconContactPhone {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#contact-phone`}></use>
      </svg>
    );
  }
}
