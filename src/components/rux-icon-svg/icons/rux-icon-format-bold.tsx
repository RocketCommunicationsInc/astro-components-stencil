import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-bold.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-bold',
  shadow: false,
})
export class RuxIconFormatBold {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-bold`}></use>
      </svg>
    );
  }
}
