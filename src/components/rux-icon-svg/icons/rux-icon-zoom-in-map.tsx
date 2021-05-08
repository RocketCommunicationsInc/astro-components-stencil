import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/zoom-in-map.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-zoom-in-map',
  shadow: false,
})
export class RuxIconZoomInMap {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#zoom-in-map`}></use>
      </svg>
    );
  }
}
