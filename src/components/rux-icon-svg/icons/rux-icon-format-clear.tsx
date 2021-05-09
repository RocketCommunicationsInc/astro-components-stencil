import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-clear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-clear',
  shadow: false,
})
export class RuxIconFormatClear {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-clear`}></use>
      </svg>
    );
  }
}
