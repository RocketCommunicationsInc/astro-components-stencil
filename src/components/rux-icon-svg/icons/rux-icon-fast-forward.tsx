import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fast-forward.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fast-forward',
  shadow: false,
})
export class RuxIconFastForward {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fast-forward`}></use>
      </svg>
    );
  }
}
