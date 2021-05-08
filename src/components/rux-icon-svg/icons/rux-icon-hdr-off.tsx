import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hdr-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hdr-off',
  shadow: false,
})
export class RuxIconHdrOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hdr-off`}></use>
      </svg>
    );
  }
}
