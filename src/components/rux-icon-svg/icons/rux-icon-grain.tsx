import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/grain.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-grain',
  shadow: false,
})
export class RuxIconGrain {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#grain`}></use>
      </svg>
    );
  }
}
