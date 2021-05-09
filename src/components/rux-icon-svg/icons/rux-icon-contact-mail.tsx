import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/contact-mail.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-contact-mail',
  shadow: false,
})
export class RuxIconContactMail {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#contact-mail`}></use>
      </svg>
    );
  }
}
