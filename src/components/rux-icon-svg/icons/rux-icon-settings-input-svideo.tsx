import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-input-svideo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-input-svideo',
  shadow: false,
})
export class RuxIconSettingsInputSvideo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-input-svideo`}></use>
      </svg>
    );
  }
}
