import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-car.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-car',
  shadow: false,
})
export class RuxIconDirectionsCar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-car`}></use>
      </svg>
    );
  }
}
