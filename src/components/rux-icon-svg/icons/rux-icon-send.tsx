import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/send.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-send',
  shadow: false,
})
export class RuxIconSend {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#send`}></use>
      </svg>
    );
  }
}
