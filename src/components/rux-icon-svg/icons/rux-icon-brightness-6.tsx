import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-6.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-6',
  shadow: false,
})
export class RuxIconBrightness6 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-6`}></use>
      </svg>
    );
  }
}
