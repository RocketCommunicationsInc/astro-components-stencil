import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/all-out.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-all-out',
  shadow: false,
})
export class RuxIconAllOut {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#all-out`}></use>
      </svg>
    );
  }
}
