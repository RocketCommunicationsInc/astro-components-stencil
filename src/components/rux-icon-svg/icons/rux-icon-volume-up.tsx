import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/volume-up.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-volume-up',
  shadow: false,
})
export class RuxIconVolumeUp {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#volume-up`}></use>
      </svg>
    );
  }
}
