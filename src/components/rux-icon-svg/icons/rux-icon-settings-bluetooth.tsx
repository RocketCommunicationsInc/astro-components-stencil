import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-bluetooth.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-bluetooth',
  shadow: false,
})
export class RuxIconSettingsBluetooth {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-bluetooth`}></use>
      </svg>
    );
  }
}
