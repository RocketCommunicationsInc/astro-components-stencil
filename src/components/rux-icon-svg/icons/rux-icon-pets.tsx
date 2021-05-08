import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pets.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pets',
  shadow: false,
})
export class RuxIconPets {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pets`}></use>
      </svg>
    );
  }
}
