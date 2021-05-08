import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-align-left.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-align-left',
  shadow: false,
})
export class RuxIconFormatAlignLeft {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-align-left`}></use>
      </svg>
    );
  }
}
