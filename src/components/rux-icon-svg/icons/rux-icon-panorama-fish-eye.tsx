import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/panorama-fish-eye.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-panorama-fish-eye',
  shadow: false,
})
export class RuxIconPanoramaFishEye {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#panorama-fish-eye`}></use>
      </svg>
    );
  }
}
