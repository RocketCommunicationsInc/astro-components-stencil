import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wrap-text.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wrap-text',
  shadow: false,
})
export class RuxIconWrapText {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wrap-text`}></use>
      </svg>
    );
  }
}
