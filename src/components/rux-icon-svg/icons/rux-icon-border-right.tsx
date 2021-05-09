import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-right',
  shadow: false,
})
export class RuxIconBorderRight {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-right`}></use>
      </svg>
    );
  }
}
