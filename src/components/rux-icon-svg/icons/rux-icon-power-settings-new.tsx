import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/power-settings-new.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-power-settings-new',
  shadow: false,
})
export class RuxIconPowerSettingsNew {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#power-settings-new`}></use>
      </svg>
    );
  }
}
