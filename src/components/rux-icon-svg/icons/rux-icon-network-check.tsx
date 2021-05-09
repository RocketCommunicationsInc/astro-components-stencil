import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/network-check.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-network-check',
  shadow: false,
})
export class RuxIconNetworkCheck {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#network-check`}></use>
      </svg>
    );
  }
}
