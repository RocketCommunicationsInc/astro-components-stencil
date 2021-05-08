import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mobile-screen-share.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mobile-screen-share',
  shadow: false,
})
export class RuxIconMobileScreenShare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mobile-screen-share`}></use>
      </svg>
    );
  }
}
