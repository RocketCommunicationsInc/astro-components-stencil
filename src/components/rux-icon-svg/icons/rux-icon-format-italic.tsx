import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-italic.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-italic',
  shadow: false,
})
export class RuxIconFormatItalic {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-italic`}></use>
      </svg>
    );
  }
}
