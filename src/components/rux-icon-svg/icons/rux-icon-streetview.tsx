import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/streetview.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-streetview',
  shadow: false,
})
export class RuxIconStreetview {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#streetview`}></use>
      </svg>
    );
  }
}
