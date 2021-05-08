import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/chrome-reader-mode.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-chrome-reader-mode',
  shadow: false,
})
export class RuxIconChromeReaderMode {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#chrome-reader-mode`}></use>
      </svg>
    );
  }
}
