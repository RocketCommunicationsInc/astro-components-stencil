import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sd-storage.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sd-storage',
  shadow: false,
})
export class RuxIconSdStorage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sd-storage`}></use>
      </svg>
    );
  }
}
