import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/text-rotation-none.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-text-rotation-none',
  shadow: false,
})
export class RuxIconTextRotationNone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#text-rotation-none`}></use>
      </svg>
    );
  }
}
