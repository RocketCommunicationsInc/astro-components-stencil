import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-list-bulleted.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-list-bulleted',
  shadow: false,
})
export class RuxIconFormatListBulleted {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-list-bulleted`}></use>
      </svg>
    );
  }
}
