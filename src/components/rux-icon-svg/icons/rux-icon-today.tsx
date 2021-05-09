import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/today.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-today',
  shadow: false,
})
export class RuxIconToday {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#today`}></use>
      </svg>
    );
  }
}
