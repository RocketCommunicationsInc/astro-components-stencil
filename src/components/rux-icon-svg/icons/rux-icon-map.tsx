import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/map.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-map',
  shadow: false,
})
export class RuxIconMap {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#map`}></use>
      </svg>
    );
  }
}
