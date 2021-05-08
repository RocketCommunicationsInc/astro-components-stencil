import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phonelink-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phonelink-off',
  shadow: false,
})
export class RuxIconPhonelinkOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phonelink-off`}></use>
      </svg>
    );
  }
}
