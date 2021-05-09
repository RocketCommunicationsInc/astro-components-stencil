import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thumb-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thumb-down',
  shadow: false,
})
export class RuxIconThumbDown {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thumb-down`}></use>
      </svg>
    );
  }
}
