import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/network-locked.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-network-locked',
  shadow: false,
})
export class RuxIconNetworkLocked {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#network-locked`}></use>
      </svg>
    );
  }
}
