import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/place.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-place',
  shadow: false,
})
export class RuxIconPlace {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#place`}></use>
      </svg>
    );
  }
}
