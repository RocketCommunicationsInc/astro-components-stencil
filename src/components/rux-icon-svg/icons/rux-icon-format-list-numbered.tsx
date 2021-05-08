import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-list-numbered.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-list-numbered',
  shadow: false,
})
export class RuxIconFormatListNumbered {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-list-numbered`}></use>
      </svg>
    );
  }
}
