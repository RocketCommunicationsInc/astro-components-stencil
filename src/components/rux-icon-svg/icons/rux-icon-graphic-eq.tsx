import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/graphic-eq.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-graphic-eq',
  shadow: false,
})
export class RuxIconGraphicEq {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#graphic-eq`}></use>
      </svg>
    );
  }
}
