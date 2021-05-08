import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phonelink-erase.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phonelink-erase',
  shadow: false,
})
export class RuxIconPhonelinkErase {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phonelink-erase`}></use>
      </svg>
    );
  }
}
