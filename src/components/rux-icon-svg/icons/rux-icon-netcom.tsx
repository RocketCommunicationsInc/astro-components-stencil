import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/netcom.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-netcom',
  shadow: false,
})
export class RuxIconNetcom {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#netcom`}></use>
      </svg>
    );
  }
}
