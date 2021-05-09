import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-in-talk.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-in-talk',
  shadow: false,
})
export class RuxIconPhoneInTalk {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-in-talk`}></use>
      </svg>
    );
  }
}
