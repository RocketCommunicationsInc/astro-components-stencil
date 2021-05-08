import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/email.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-email',
  shadow: false,
})
export class RuxIconEmail {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#email`}></use>
      </svg>
    );
  }
}
