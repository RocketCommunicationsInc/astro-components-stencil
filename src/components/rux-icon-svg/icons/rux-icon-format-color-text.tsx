import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-color-text.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-color-text',
  shadow: false,
})
export class RuxIconFormatColorText {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-color-text`}></use>
      </svg>
    );
  }
}
