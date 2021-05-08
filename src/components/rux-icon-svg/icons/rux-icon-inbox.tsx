import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/inbox.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-inbox',
  shadow: false,
})
export class RuxIconInbox {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#inbox`}></use>
      </svg>
    );
  }
}
