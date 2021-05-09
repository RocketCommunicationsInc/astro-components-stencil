import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-hdr.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-hdr',
  shadow: false,
})
export class RuxIconFilterHdr {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-hdr`}></use>
      </svg>
    );
  }
}
