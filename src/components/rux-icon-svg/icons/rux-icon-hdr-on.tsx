import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hdr-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hdr-on',
  shadow: false,
})
export class RuxIconHdrOn {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hdr-on`}></use>
      </svg>
    );
  }
}
