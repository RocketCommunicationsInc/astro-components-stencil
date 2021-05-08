import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/verified-user.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-verified-user',
  shadow: false,
})
export class RuxIconVerifiedUser {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#verified-user`}></use>
      </svg>
    );
  }
}
