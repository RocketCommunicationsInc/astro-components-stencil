import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-outer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-outer',
  shadow: false,
})
export class RuxIconBorderOuter {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-outer`}></use>
      </svg>
    );
  }
}
