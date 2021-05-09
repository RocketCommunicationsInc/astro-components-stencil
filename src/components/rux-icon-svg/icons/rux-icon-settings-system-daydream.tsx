import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-system-daydream.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-system-daydream',
  shadow: false,
})
export class RuxIconSettingsSystemDaydream {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-system-daydream`}></use>
      </svg>
    );
  }
}
