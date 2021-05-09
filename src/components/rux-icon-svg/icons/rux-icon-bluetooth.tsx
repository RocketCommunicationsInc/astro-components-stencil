import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/bluetooth.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-bluetooth',
  shadow: false,
})
export class RuxIconBluetooth {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#bluetooth`}></use>
      </svg>
    );
  }
}
