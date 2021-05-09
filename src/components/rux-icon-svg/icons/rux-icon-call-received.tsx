import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-received.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-received',
  shadow: false,
})
export class RuxIconCallReceived {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-received`}></use>
      </svg>
    );
  }
}
