import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-dining.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-dining',
  shadow: false,
})
export class RuxIconLocalDining {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-dining`}></use>
      </svg>
    );
  }
}
