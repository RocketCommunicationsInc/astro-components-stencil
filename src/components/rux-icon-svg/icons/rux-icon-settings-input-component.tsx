import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-input-component.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-input-component',
  shadow: false,
})
export class RuxIconSettingsInputComponent {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-input-component`}></use>
      </svg>
    );
  }
}
