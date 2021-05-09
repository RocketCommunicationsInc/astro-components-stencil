import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/toll.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-toll',
  shadow: false,
})
export class RuxIconToll {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#toll`}></use>
      </svg>
    );
  }
}
