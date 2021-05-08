import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bluetooth-searching.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bluetooth-searching',
  shadow: false,
})
export class RuxIconBluetoothSearching {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bluetooth-searching`}></use>
      </svg>
    );
  }
}
