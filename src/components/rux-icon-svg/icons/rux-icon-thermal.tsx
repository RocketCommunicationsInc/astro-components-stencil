import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thermal.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thermal',
  shadow: false,
})
export class RuxIconThermal {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thermal`}></use>
      </svg>
    );
  }
}
