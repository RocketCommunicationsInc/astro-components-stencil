import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/network-cell.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-network-cell',
  shadow: false,
})
export class RuxIconNetworkCell {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#network-cell`}></use>
      </svg>
    );
  }
}
