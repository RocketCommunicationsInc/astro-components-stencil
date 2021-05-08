import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-device-information.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-device-information',
  shadow: false,
})
export class RuxIconPermDeviceInformation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-device-information`}></use>
      </svg>
    );
  }
}
