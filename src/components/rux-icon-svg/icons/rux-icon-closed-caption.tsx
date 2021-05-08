import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/closed-caption.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-closed-caption',
  shadow: false,
})
export class RuxIconClosedCaption {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#closed-caption`}></use>
      </svg>
    );
  }
}
