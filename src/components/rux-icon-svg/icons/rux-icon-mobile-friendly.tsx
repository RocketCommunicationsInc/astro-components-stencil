import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mobile-friendly.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mobile-friendly',
  shadow: false,
})
export class RuxIconMobileFriendly {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mobile-friendly`}></use>
      </svg>
    );
  }
}
