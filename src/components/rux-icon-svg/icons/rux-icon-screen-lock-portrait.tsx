import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/screen-lock-portrait.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-screen-lock-portrait',
  shadow: false,
})
export class RuxIconScreenLockPortrait {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#screen-lock-portrait`}></use>
      </svg>
    );
  }
}
