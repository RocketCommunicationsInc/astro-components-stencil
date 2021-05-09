import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-phone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-phone',
  shadow: false,
})
export class RuxIconSettingsPhone {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-phone`}></use>
      </svg>
    );
  }
}
