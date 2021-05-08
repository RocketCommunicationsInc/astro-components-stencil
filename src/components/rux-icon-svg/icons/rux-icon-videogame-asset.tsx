import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/videogame-asset.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-videogame-asset',
  shadow: false,
})
export class RuxIconVideogameAsset {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#videogame-asset`}></use>
      </svg>
    );
  }
}
