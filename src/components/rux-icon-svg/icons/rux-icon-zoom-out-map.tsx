import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/zoom-out-map.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-zoom-out-map',
  shadow: false,
})
export class RuxIconZoomOutMap {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#zoom-out-map`}></use>
      </svg>
    );
  }
}
