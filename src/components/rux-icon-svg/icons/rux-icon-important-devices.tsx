import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/important-devices.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-important-devices',
  shadow: false,
})
export class RuxIconImportantDevices {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#important-devices`}></use>
      </svg>
    );
  }
}
