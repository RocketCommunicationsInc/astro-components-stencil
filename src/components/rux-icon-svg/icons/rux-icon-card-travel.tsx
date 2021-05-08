import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/card-travel.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-card-travel',
  shadow: false,
})
export class RuxIconCardTravel {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#card-travel`}></use>
      </svg>
    );
  }
}
