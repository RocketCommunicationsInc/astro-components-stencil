import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/volume-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-volume-off',
  shadow: false,
})
export class RuxIconVolumeOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#volume-off`}></use>
      </svg>
    );
  }
}
