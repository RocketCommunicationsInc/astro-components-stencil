import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/text-format.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-text-format',
  shadow: false,
})
export class RuxIconTextFormat {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#text-format`}></use>
      </svg>
    );
  }
}
