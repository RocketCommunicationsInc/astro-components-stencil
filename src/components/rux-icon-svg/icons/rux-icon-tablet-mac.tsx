import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tablet-mac.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tablet-mac',
  shadow: false,
})
export class RuxIconTabletMac {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tablet-mac`}></use>
      </svg>
    );
  }
}
