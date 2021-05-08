import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-iphone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-iphone',
  shadow: false,
})
export class RuxIconPhoneIphone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-iphone`}></use>
      </svg>
    );
  }
}
