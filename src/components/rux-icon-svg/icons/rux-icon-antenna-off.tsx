import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/antenna-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-antenna-off',
  shadow: false,
})
export class RuxIconAntennaOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#antenna-off`}></use>
      </svg>
    );
  }
}
