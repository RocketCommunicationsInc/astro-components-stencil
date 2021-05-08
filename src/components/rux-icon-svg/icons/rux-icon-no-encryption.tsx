import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/no-encryption.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-no-encryption',
  shadow: false,
})
export class RuxIconNoEncryption {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#no-encryption`}></use>
      </svg>
    );
  }
}
