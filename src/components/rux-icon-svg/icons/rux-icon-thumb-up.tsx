import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thumb-up.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thumb-up',
  shadow: false,
})
export class RuxIconThumbUp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thumb-up`}></use>
      </svg>
    );
  }
}
