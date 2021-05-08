import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/high-quality.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-high-quality',
  shadow: false,
})
export class RuxIconHighQuality {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#high-quality`}></use>
      </svg>
    );
  }
}
