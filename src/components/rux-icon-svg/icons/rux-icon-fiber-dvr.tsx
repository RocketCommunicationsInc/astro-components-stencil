import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fiber-dvr.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fiber-dvr',
  shadow: false,
})
export class RuxIconFiberDvr {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fiber-dvr`}></use>
      </svg>
    );
  }
}
