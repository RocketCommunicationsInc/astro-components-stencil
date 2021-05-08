import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/color-lens.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-color-lens',
  shadow: false,
})
export class RuxIconColorLens {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#color-lens`}></use>
      </svg>
    );
  }
}
