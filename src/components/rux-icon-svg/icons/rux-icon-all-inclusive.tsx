import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/all-inclusive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-all-inclusive',
  shadow: false,
})
export class RuxIconAllInclusive {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#all-inclusive`}></use>
      </svg>
    );
  }
}
