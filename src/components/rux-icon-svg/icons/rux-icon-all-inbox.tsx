import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/all-inbox.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-all-inbox',
  shadow: false,
})
export class RuxIconAllInbox {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#all-inbox`}></use>
      </svg>
    );
  }
}
