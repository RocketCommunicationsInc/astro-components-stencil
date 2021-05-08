import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/select-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-select-all',
  shadow: false,
})
export class RuxIconSelectAll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#select-all`}></use>
      </svg>
    );
  }
}
