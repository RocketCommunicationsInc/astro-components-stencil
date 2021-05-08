import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/laptop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-laptop',
  shadow: false,
})
export class RuxIconLaptop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#laptop`}></use>
      </svg>
    );
  }
}
