import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-callback.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-callback',
  shadow: false,
})
export class RuxIconPhoneCallback {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-callback`}></use>
      </svg>
    );
  }
}
