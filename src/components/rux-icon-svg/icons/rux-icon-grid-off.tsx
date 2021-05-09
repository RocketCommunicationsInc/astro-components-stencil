import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/grid-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-grid-off',
  shadow: false,
})
export class RuxIconGridOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#grid-off`}></use>
      </svg>
    );
  }
}
