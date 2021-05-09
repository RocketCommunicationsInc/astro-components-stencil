import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mobile-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mobile-off',
  shadow: false,
})
export class RuxIconMobileOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mobile-off`}></use>
      </svg>
    );
  }
}
