import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/departure-board.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-departure-board',
  shadow: false,
})
export class RuxIconDepartureBoard {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#departure-board`}></use>
      </svg>
    );
  }
}
