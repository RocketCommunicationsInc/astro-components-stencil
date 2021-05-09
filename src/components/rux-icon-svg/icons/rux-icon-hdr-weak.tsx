import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hdr-weak.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hdr-weak',
  shadow: false,
})
export class RuxIconHdrWeak {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hdr-weak`}></use>
      </svg>
    );
  }
}
