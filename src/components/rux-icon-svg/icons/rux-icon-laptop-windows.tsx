import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/laptop-windows.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-laptop-windows',
  shadow: false,
})
export class RuxIconLaptopWindows {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#laptop-windows`}></use>
      </svg>
    );
  }
}
