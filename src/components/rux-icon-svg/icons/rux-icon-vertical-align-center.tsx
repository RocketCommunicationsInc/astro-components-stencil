import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vertical-align-center.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vertical-align-center',
  shadow: false,
})
export class RuxIconVerticalAlignCenter {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vertical-align-center`}></use>
      </svg>
    );
  }
}
