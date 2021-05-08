import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/check.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-check',
  shadow: false,
})
export class RuxIconCheck {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#check`}></use>
      </svg>
    );
  }
}
