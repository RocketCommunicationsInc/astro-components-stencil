import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/screen-share.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-screen-share',
  shadow: false,
})
export class RuxIconScreenShare {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#screen-share`}></use>
      </svg>
    );
  }
}
