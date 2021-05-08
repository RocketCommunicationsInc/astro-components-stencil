import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/terrain.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-terrain',
  shadow: false,
})
export class RuxIconTerrain {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#terrain`}></use>
      </svg>
    );
  }
}
