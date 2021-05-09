import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gps-fixed.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gps-fixed',
  shadow: false,
})
export class RuxIconGpsFixed {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gps-fixed`}></use>
      </svg>
    );
  }
}
