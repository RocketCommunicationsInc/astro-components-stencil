import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-style.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-style',
  shadow: false,
})
export class RuxIconBorderStyle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-style`}></use>
      </svg>
    );
  }
}
