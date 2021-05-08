import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/panorama-vertical.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-panorama-vertical',
  shadow: false,
})
export class RuxIconPanoramaVertical {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#panorama-vertical`}></use>
      </svg>
    );
  }
}
