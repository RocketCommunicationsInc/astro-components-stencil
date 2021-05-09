import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-strikethrough.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-strikethrough',
  shadow: false,
})
export class RuxIconFormatStrikethrough {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-strikethrough`}></use>
      </svg>
    );
  }
}
