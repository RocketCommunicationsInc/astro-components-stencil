import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-boat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-boat',
  shadow: false,
})
export class RuxIconDirectionsBoat {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-boat`}></use>
      </svg>
    );
  }
}
