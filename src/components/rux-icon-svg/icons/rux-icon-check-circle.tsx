import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/check-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-check-circle',
  shadow: false,
})
export class RuxIconCheckCircle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#check-circle`}></use>
      </svg>
    );
  }
}
