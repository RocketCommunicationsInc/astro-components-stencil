import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/font-download.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-font-download',
  shadow: false,
})
export class RuxIconFontDownload {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#font-download`}></use>
      </svg>
    );
  }
}
