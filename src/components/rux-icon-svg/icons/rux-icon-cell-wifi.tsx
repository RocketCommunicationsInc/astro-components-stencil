import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cell-wifi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cell-wifi',
  shadow: false,
})
export class RuxIconCellWifi {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cell-wifi`}></use>
      </svg>
    );
  }
}
