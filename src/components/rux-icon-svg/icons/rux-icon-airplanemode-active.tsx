import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airplanemode-active.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airplanemode-active',
  shadow: false,
})
export class RuxIconAirplanemodeActive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airplanemode-active`}></use>
      </svg>
    );
  }
}
