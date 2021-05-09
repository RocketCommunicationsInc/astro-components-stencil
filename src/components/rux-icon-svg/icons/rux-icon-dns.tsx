import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dns.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dns',
  shadow: false,
})
export class RuxIconDns {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dns`}></use>
      </svg>
    );
  }
}
