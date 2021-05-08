import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dialer-sip.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dialer-sip',
  shadow: false,
})
export class RuxIconDialerSip {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dialer-sip`}></use>
      </svg>
    );
  }
}
