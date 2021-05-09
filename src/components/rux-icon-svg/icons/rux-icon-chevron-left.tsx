import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/chevron-left.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-chevron-left',
  shadow: false,
})
export class RuxIconChevronLeft {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#chevron-left`}></use>
      </svg>
    );
  }
}
