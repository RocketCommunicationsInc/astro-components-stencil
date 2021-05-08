import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-back.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-back',
  shadow: false,
})
export class RuxIconArrowBack {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-back`}></use>
      </svg>
    );
  }
}
