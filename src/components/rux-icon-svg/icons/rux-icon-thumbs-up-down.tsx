import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thumbs-up-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thumbs-up-down',
  shadow: false,
})
export class RuxIconThumbsUpDown {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thumbs-up-down`}></use>
      </svg>
    );
  }
}
