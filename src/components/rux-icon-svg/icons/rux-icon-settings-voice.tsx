import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-voice.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-voice',
  shadow: false,
})
export class RuxIconSettingsVoice {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-voice`}></use>
      </svg>
    );
  }
}
