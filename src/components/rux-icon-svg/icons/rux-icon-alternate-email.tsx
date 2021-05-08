import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/alternate-email.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-alternate-email',
  shadow: false,
})
export class RuxIconAlternateEmail {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#alternate-email`}></use>
      </svg>
    );
  }
}
