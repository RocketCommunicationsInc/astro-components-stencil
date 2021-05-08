import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-input-antenna.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-input-antenna',
  shadow: false,
})
export class RuxIconSettingsInputAntenna {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-input-antenna`}></use>
      </svg>
    );
  }
}
