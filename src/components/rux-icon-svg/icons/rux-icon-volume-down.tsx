import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/volume-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-volume-down',
  shadow: false,
})
export class RuxIconVolumeDown {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#volume-down`}></use>
      </svg>
    );
  }
}
