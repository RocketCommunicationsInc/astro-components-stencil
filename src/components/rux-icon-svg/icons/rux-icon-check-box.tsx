import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/check-box.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-check-box',
  shadow: false,
})
export class RuxIconCheckBox {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#check-box`}></use>
      </svg>
    );
  }
}
