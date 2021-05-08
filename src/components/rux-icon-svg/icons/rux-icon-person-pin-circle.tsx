import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person-pin-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person-pin-circle',
  shadow: false,
})
export class RuxIconPersonPinCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person-pin-circle`}></use>
      </svg>
    );
  }
}
