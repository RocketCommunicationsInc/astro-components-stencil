import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/done-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-done-all',
  shadow: false,
})
export class RuxIconDoneAll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#done-all`}></use>
      </svg>
    );
  }
}
