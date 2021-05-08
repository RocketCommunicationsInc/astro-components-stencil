import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/adb.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-adb',
  shadow: false,
})
export class RuxIconAdb {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#adb`}></use>
      </svg>
    );
  }
}
