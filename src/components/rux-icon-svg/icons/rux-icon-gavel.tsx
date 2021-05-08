import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gavel.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gavel',
  shadow: false,
})
export class RuxIconGavel {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gavel`}></use>
      </svg>
    );
  }
}
