import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/screen-lock-landscape.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-screen-lock-landscape',
  shadow: false,
})
export class RuxIconScreenLockLandscape {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#screen-lock-landscape`}></use>
      </svg>
    );
  }
}
