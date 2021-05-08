import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-ethernet.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-ethernet',
  shadow: false,
})
export class RuxIconSettingsEthernet {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-ethernet`}></use>
      </svg>
    );
  }
}
