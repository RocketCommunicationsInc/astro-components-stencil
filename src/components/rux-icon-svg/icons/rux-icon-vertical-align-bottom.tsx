import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vertical-align-bottom.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vertical-align-bottom',
  shadow: false,
})
export class RuxIconVerticalAlignBottom {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vertical-align-bottom`}></use>
      </svg>
    );
  }
}
