import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/panorama-wide-angle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-panorama-wide-angle',
  shadow: false,
})
export class RuxIconPanoramaWideAngle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#panorama-wide-angle`}></use>
      </svg>
    );
  }
}
