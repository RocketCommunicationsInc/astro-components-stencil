import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/laptop-mac.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-laptop-mac',
  shadow: false,
})
export class RuxIconLaptopMac {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#laptop-mac`}></use>
      </svg>
    );
  }
}
