import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/ring-volume.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-ring-volume',
  shadow: false,
})
export class RuxIconRingVolume {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#ring-volume`}></use>
      </svg>
    );
  }
}
