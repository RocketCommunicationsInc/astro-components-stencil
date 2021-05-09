import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-left.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-left',
  shadow: false,
})
export class RuxIconArrowLeft {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-left`}></use>
      </svg>
    );
  }
}
