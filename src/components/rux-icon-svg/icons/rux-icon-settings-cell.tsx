import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-cell.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-cell',
  shadow: false,
})
export class RuxIconSettingsCell {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-cell`}></use>
      </svg>
    );
  }
}
