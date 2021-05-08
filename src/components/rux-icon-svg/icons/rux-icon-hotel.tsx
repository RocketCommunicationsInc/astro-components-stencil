import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hotel.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hotel',
  shadow: false,
})
export class RuxIconHotel {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hotel`}></use>
      </svg>
    );
  }
}
