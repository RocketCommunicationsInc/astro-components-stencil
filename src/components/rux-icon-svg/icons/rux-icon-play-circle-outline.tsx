import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/play-circle-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-play-circle-outline',
  shadow: false,
})
export class RuxIconPlayCircleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#play-circle-outline`}></use>
      </svg>
    );
  }
}
