import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/markunread-mailbox.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-markunread-mailbox',
  shadow: false,
})
export class RuxIconMarkunreadMailbox {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#markunread-mailbox`}></use>
      </svg>
    );
  }
}
