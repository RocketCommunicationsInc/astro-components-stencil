import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/link-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-link-off',
  shadow: false,
})
export class RuxIconLinkOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#link-off`}></use>
      </svg>
    );
  }
}
