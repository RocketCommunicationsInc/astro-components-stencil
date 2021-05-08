import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/chat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-chat',
  shadow: false,
})
export class RuxIconChat {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#chat`}></use>
      </svg>
    );
  }
}
