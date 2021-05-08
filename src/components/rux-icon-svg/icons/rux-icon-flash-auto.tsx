import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flash-auto.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flash-auto',
  shadow: false,
})
export class RuxIconFlashAuto {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flash-auto`}></use>
      </svg>
    );
  }
}
