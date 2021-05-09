import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-drop-up.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-drop-up',
  shadow: false,
})
export class RuxIconArrowDropUp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-drop-up`}></use>
      </svg>
    );
  }
}
