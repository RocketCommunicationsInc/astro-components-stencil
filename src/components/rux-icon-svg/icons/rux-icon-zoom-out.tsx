import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/zoom-out.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-zoom-out',
  shadow: false,
})
export class RuxIconZoomOut {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#zoom-out`}></use>
      </svg>
    );
  }
}
