import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-color.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-color',
  shadow: false,
})
export class RuxIconBorderColor {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-color`}></use>
      </svg>
    );
  }
}
