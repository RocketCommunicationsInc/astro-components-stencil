import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mail.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mail',
  shadow: false,
})
export class RuxIconMail {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mail`}></use>
      </svg>
    );
  }
}
