import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-forwarded.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-forwarded',
  shadow: false,
})
export class RuxIconPhoneForwarded {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-forwarded`}></use>
      </svg>
    );
  }
}
