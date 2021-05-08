import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/4k.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-4k',
  shadow: false,
})
export class RuxIcon4k {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#4k`}></use>
      </svg>
    );
  }
}
