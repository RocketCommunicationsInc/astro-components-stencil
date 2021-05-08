import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/move-to-inbox.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-move-to-inbox',
  shadow: false,
})
export class RuxIconMoveToInbox {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#move-to-inbox`}></use>
      </svg>
    );
  }
}
