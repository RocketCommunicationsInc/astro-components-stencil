import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/open-in-browser.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-open-in-browser',
  shadow: false,
})
export class RuxIconOpenInBrowser {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#open-in-browser`}></use>
      </svg>
    );
  }
}
