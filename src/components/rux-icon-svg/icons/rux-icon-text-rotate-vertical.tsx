import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/text-rotate-vertical.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-text-rotate-vertical',
  shadow: false,
})
export class RuxIconTextRotateVertical {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#text-rotate-vertical`}></use>
      </svg>
    );
  }
}
