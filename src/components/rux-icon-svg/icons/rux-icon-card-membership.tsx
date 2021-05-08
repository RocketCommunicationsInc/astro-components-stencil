import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/card-membership.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-card-membership',
  shadow: false,
})
export class RuxIconCardMembership {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#card-membership`}></use>
      </svg>
    );
  }
}
