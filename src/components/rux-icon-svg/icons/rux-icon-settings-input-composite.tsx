import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-input-composite.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-input-composite',
  shadow: false,
})
export class RuxIconSettingsInputComposite {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-input-composite`}></use>
      </svg>
    );
  }
}
