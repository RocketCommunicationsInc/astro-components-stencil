import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-align-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-align-right',
  shadow: false,
})
export class RuxIconFormatAlignRight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-align-right`}></use>
      </svg>
    );
  }
}
