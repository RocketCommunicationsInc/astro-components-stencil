import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-align-justify.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-align-justify',
  shadow: false,
})
export class RuxIconFormatAlignJustify {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-align-justify`}></use>
      </svg>
    );
  }
}
