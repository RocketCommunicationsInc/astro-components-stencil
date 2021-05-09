import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fast-rewind.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fast-rewind',
  shadow: false,
})
export class RuxIconFastRewind {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fast-rewind`}></use>
      </svg>
    );
  }
}
