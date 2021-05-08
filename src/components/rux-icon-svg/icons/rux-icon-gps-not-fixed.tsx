import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gps-not-fixed.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gps-not-fixed',
  shadow: false,
})
export class RuxIconGpsNotFixed {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gps-not-fixed`}></use>
      </svg>
    );
  }
}
