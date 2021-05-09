import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/contact-support.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-contact-support',
  shadow: false,
})
export class RuxIconContactSupport {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#contact-support`}></use>
      </svg>
    );
  }
}
