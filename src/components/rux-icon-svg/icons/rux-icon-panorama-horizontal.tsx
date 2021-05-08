import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/panorama-horizontal.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-panorama-horizontal',
  shadow: false,
})
export class RuxIconPanoramaHorizontal {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#panorama-horizontal`}></use>
      </svg>
    );
  }
}
