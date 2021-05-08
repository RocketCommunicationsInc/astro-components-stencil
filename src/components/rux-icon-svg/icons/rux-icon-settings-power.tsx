import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-power.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-power',
  shadow: false,
})
export class RuxIconSettingsPower {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-power`}></use>
      </svg>
    );
  }
}
