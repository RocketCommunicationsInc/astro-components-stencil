import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/theaters.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-theaters',
  shadow: false,
})
export class RuxIconTheaters {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#theaters`}></use>
      </svg>
    );
  }
}
