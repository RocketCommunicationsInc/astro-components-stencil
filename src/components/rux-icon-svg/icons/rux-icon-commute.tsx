import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/commute.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-commute',
  shadow: false,
})
export class RuxIconCommute {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#commute`}></use>
      </svg>
    );
  }
}
