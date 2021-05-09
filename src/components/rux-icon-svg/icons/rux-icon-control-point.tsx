import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/control-point.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-control-point',
  shadow: false,
})
export class RuxIconControlPoint {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#control-point`}></use>
      </svg>
    );
  }
}
