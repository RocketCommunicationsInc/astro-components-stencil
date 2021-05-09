import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/nature.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-nature',
  shadow: false,
})
export class RuxIconNature {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#nature`}></use>
      </svg>
    );
  }
}
