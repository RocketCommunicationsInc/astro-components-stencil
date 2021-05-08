import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tab.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tab',
  shadow: false,
})
export class RuxIconTab {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tab`}></use>
      </svg>
    );
  }
}
