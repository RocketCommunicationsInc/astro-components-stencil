import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-inner.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-inner',
  shadow: false,
})
export class RuxIconBorderInner {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-inner`}></use>
      </svg>
    );
  }
}
