import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hdr-strong.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hdr-strong',
  shadow: false,
})
export class RuxIconHdrStrong {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hdr-strong`}></use>
      </svg>
    );
  }
}
