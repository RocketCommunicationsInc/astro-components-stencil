import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-input-hdmi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-input-hdmi',
  shadow: false,
})
export class RuxIconSettingsInputHdmi {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-input-hdmi`}></use>
      </svg>
    );
  }
}
