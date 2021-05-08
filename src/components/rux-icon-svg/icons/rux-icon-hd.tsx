import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hd.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hd',
  shadow: false,
})
export class RuxIconHd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hd`}></use>
      </svg>
    );
  }
}
