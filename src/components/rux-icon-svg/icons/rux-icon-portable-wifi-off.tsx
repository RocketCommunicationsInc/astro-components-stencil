import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/portable-wifi-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-portable-wifi-off',
  shadow: false,
})
export class RuxIconPortableWifiOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#portable-wifi-off`}></use>
      </svg>
    );
  }
}
