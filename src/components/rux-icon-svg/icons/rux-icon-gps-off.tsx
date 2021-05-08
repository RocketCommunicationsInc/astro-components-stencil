import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gps-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gps-off',
  shadow: false,
})
export class RuxIconGpsOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gps-off`}></use>
      </svg>
    );
  }
}
