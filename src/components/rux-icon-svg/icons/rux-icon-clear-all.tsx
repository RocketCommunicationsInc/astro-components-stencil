import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/clear-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-clear-all',
  shadow: false,
})
export class RuxIconClearAll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#clear-all`}></use>
      </svg>
    );
  }
}
