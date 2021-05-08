import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sms.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sms',
  shadow: false,
})
export class RuxIconSms {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sms`}></use>
      </svg>
    );
  }
}
