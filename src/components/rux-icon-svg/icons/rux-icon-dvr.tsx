import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dvr.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dvr',
  shadow: false,
})
export class RuxIconDvr {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dvr`}></use>
      </svg>
    );
  }
}
