import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-scan-wifi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-scan-wifi',
  shadow: false,
})
export class RuxIconPermScanWifi {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-scan-wifi`}></use>
      </svg>
    );
  }
}
