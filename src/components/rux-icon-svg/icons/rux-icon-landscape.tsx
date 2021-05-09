import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/landscape.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-landscape',
  shadow: false,
})
export class RuxIconLandscape {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#landscape`}></use>
      </svg>
    );
  }
}
