import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/how-to-reg.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-how-to-reg',
  shadow: false,
})
export class RuxIconHowToReg {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#how-to-reg`}></use>
      </svg>
    );
  }
}
