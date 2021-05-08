import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/compare.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-compare',
  shadow: false,
})
export class RuxIconCompare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#compare`}></use>
      </svg>
    );
  }
}
