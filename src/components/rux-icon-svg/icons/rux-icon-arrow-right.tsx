import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-right',
  shadow: false,
})
export class RuxIconArrowRight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-right`}></use>
      </svg>
    );
  }
}
