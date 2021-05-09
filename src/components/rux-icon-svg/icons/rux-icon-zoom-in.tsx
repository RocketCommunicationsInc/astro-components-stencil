import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/zoom-in.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-zoom-in',
  shadow: false,
})
export class RuxIconZoomIn {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#zoom-in`}></use>
      </svg>
    );
  }
}
