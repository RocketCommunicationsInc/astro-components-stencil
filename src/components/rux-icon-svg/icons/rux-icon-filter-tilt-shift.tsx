import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-tilt-shift.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-tilt-shift',
  shadow: false,
})
export class RuxIconFilterTiltShift {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-tilt-shift`}></use>
      </svg>
    );
  }
}
